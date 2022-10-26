import styles from '../styles/Home.module.css';
import { supabase } from '../utils/supabaseClient';

export default function Home({ listItems, error }) {
  return (
    <div className={styles.container}>
      <h1>HOLY</h1>
      {/* {JSON.stringify(listItems)}
      { error }
      {listItems.map((listItem, i) => {
        return (
          <div key={i}>
            <h2>{listItem.item}</h2>
          </div>
        );
      })} */}
    </div>
  );
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from('todos').insert({ item: "help me" });
  // const { data, error, status } = await supabase.from('todos').select();
  return {
    props: {
      listItems: data,
      error
    },
  };
}
