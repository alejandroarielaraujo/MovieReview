import {useAppContext} from "../store/store";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom"; // Importa el hook para la navegación
import Movie from "../components/Movie";

export default function Index(){
    const store = useAppContext();
    const navigate = useNavigate(); // Inicializa el hook de navegación

    const moviesContainer = {
        display: 'flex',
        flexWrap: 'wrap',        
        justifyContent: 'center',  // Para centrar las entradas horizontalmente        
    }

    const movieItemStyle = {
        marginBottom: '40px', // Esto agregará más espacio entre las filas
    };

    function handleDelete(id) {
        store.deleteItem(id); // Llamada a la función deleteItem
     }

    function handleEdit(id) {
        navigate(`/create?id=${id}`); // Redirige a la página de edición pasando el id del libro
    }

    return(
        <Layout>
            <div style={moviesContainer}>
                {store.items.map((item) => (
                    <div key={item.id} style={movieItemStyle}>
                        <Movie item={item} handleEdit={handleEdit} handleDelete={handleDelete}/>                        
                    </div>
                ))}
            </div>
        </Layout>
    ) 
}



{/* <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Book item={item} />
    <div>
        <button onClick={() => handleEdit(item.id)}>Edit</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
</div> */}