import express from 'express';
import { getAllMugs, getMugById, createMug, updateMug, deleteMug } from '../controllers/mugsController.js';

const router = express.Router();

router.get('/mugs', getAllMugs);
router.get('/mugs/:id', getMugById);
router.post('/mugs', createMug);
router.put('/mugs/:id', updateMug);
router.delete('/mugs/:id', deleteMug);

export default router;
