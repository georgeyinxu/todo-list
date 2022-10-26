// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  const { data, error, status } = await supabase.from('todos').select('*');

  await res.status(status).send(data);
}

