import {useAppContext} from "../store/store";
import Layout from "../components/Layout";
import Book from "../components/Book";

export default function Index(){
    const store = useAppContext();
    return(
        <Layout>
            {/* <Link to="/create">Create</Link> */}
            {store.items.map((item) => (
                <Book key={item.id} item={item} />
            ))}
        </Layout>
    ) 
}

