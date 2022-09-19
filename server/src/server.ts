import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHourString } from './utils/convert-hour-string';
import { convertMinutesHour } from './utils/convert-minutes-hour';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient(); // ele já faz a conexão com o bando de dados automaticamente

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  });

  return res.json(games)
});

app.post('/games/:id/ads', async (req, res) => { // rota -> para adiciona um novo anúncio é necessário adicionar o id do game, uma das varias possibilidades de adiciona valores relacionais
  const gameId = req.params.id;
  const body = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','), // juntar tudo para enviar para o banco de dados 
      hourStart: convertHourString(body.hourStart),
      hourEnd: convertHourString(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  return res.status(201).json(ad)
});

app.get('/games/:id/ads', async(req, res) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    select: { // eliminando o discord da response
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return res.json(ads.map((ad) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','), // formatando os dados dos dias pois antes era uma string com os valores e agora se torna uma array de valores
      hourStart: convertMinutesHour(ad.hourStart),
      hourEnd: convertMinutesHour(ad.hourEnd),
    }
  }));
});

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id

  const ad = await prisma.ad.findUniqueOrThrow({ // findUniqueOrThrow -> caso não encontre o id retorna o um erro
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  });

  return res.json({
    discord: ad.discord
  });
});

app.listen(3333)