import wordModel from '../model/wordModel';
import express from 'express';


export async function getWords(req, res, next) {
  console.log('in get words!');
  res.locals.words = 'test';
  next();
};

