import React from "react";
import styles from "./UserPhotoPost.module.css";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import { PHOTO_POST, USER_LOGGED } from "../../Api";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const UserPhotoPost = () => {
  const description = useForm();
  const [img, setImg] = React.useState("");
  const [imgPreview, setImgPreview] = React.useState("");
  const { data, error, loading, request } = useFetch();
  const [userData, setUserData] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  React.useEffect(() => {
    getUser();
  }, [userData])

  async function getUser() {
    const token = localStorage.getItem('token');
    const { url, options } = USER_LOGGED(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUserData(json.id)
  }

  function handleSubmit(event) {
    getUser();
    event.preventDefault();
    const dataForm = { photo: img , description: description.value , petId: userData }
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(JSON.stringify(dataForm), token);
    request(url, options);
  }


  async function handleImgChange({ target }) {
    const file = target.files[0];
    const base64 = await convertToBase64(file);
    setImg(base64)
    setImgPreview(base64)
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (() => {
        resolve(fileReader.result)
      });

      fileReader.onerror = ((error) => {
        reject(error);
      } )
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Descrição"
          type="text"
          name="description"
          {...description}
        />
        <input
          className={styles.file}
          type="file"
          name="photo"
          id="photo"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {imgPreview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${imgPreview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
