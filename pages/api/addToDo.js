import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  const item = req.body.inputItem
  const { error, status } = await supabase.from('todos').insert({ item })

  await res.status(status).send(error);
}