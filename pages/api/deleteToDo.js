import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  const index = req.body.index;
  const { error, status } = await supabase.from('todos').delete().eq('id', index)

  await res.status(status).send(error);
}