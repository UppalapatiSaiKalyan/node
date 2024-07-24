import express, { Request, Response } from 'express';
import Language1 from '../db/models/test1';

const languageRoute = express.Router();

languageRoute.use(express.json());

languageRoute.get('/langget', async (req: Request, res: Response) => {
  try {
    const language = await Language1.findAll();
    res.json(language);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

languageRoute.post('/langpost', async (req: Request, res: Response) => {
  const { id, languagename, languagecode } = req.body;

  try {
    const newLanguage = await Language1.create({ id, languagename, languagecode });
    res.status(201).json(newLanguage);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

languageRoute.put('/langput/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { languagename, languagecode } = req.body;

  try {
    const languageToUpdate = await Language1.findByPk(id);

    if (!languageToUpdate) {
      return res.status(404).json({ error: 'Language not found' });
    }

    languageToUpdate.languagename = languagename;
    languageToUpdate.languagecode = languagecode;
    
    await languageToUpdate.save();
    res.json(languageToUpdate);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

languageRoute.delete('/langdel/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const languageToDelete = await Language1.findByPk(id);

    if (!languageToDelete) {
      return res.status(404).json({ error: 'Language not found' });
    }

    await languageToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default languageRoute;
