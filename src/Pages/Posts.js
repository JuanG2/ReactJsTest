import { useEffect, useState } from 'react';
import axios from "axios";
import { Grid, Paper, Typography,Modal,TextField} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import './Posts.css';
import { Navigate } from 'react-router-dom';
import { useUserContext } from "../context/userContext";
import { useAuth } from "../firebase-config";


const url = "https://waco-api.herokuapp.com/api/posts";
const urlall = "https://waco-api.herokuapp.com/api/posts/all";

const Posts = (authorized) =>{

    const { user, logoutUser } = useUserContext();
    const currentUser = useAuth();
    const [data,setData] = useState([]);
    const [modalInsert, setModalInsert] = useState(false);

    const [postInsertado, setPostInsertado] = useState({
        title:"",
        body: "",
        user_uuid: user.uid,
    })

    const handleChange= e=>{
        const {name,value} = e.target;
        setPostInsertado(prevState =>({
            ...prevState,
            [name]:value
        }))
        console.log(postInsertado);
    }

    /* const petitionGet= async()=>{
        await axios.get(url).then(response =>{
            console.log({data: response.data});
            setData(response.data);
        })
    } */

    const petitionGetAll= async()=>{
        await axios.get(urlall).then(response =>{
            console.log({data: response.data});
            setData(response.data);
        })
    }

    const petitionPost= async()=>{
        await axios.post(url,postInsertado).then(response =>{
            console.log(response);
            console.log(response.data);
            //setData(data.concat(response.data));
            openCloseModalInsert();
        })
    }

    const openCloseModalInsert = () =>{
        setModalInsert(!modalInsert);
    }

    useEffect(async() =>{
        await petitionGetAll();
    },[])
    
    const ModalBody= (
        <div className='modal_body'>
            <h3>Agregar nuevo post</h3>
            <TextField name="title" className='input_post' label="Titulo" onChange={handleChange}></TextField>
            <br/>
            <TextField name="body" className='input_post' label="Post" onChange={handleChange}></TextField>
            <br/>
            <div>
                <Button color='primary' onClick={petitionPost}>Insertar</Button>
                <Button onClick={openCloseModalInsert}>Cancelar</Button>
            </div>
        </div>
    )

    if(!authorized){
        return <Navigate to="/login"/>
    }

    return(
    <div className='posts'>
        <div className='nav_posts'>
            <Button style={{color: "rgba(255,255,255)"}} className="log_outB"onClick={logoutUser}>Log out</Button>
        </div>
      <Grid container className='posts_grid'>
          {data.data?.map(consola=>(
          <Grid item key={consola.id}>{/*KeyContent*/}
            <Card className='post_card'>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {consola.title}
                  </Typography>
                  <Typography component="p">{consola.body}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary"> Update</Button>
                <Button size="small" color="primary"> Delete</Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
      </Grid>
      
      <Button style={{color: "rgba(0,0,0)"}} onClick={openCloseModalInsert}>Nuevo Post</Button>
      <Modal open = {modalInsert}
      onClose = {openCloseModalInsert}>
          {ModalBody}
      </Modal>
      
    </div>
    
    );
}

export default Posts;