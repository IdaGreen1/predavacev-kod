
import './App.css';
import {Comment, Student, University} from './Components';

export default function App() {

  const comment = {
    date: new Date(),
    text: 'I love learning React',
    name: 'Jonh Doe',
    url: 'https://www.bing.com/images/search?view=detailV2&ccid=j8yd8dJ5&id=112F52F7D1CDB0B3D79D17C4578645D3942292EB&thid=OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK&mediaurl=https%3a%2f%2fget.pxhere.com%2fphoto%2fman-person-people-hair-male-portrait-model-spring-fashion-hairstyle-smile-temple-head-photograph-beauty-photo-shoot-portrait-photography-16530.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8fcc9df1d279db5e566e043436c2f3b8%3frik%3d65IilNNFhlfEFw%26pid%3dImgRaw%26r%3d0&exph=4608&expw=2592&q=photo+of+man&simid=608036403558746943&FORM=IRPRST&ck=3CDE827CAD3CE277F09F3263DBFA5A14&selectedIndex=0&itb=0&idpp=overlayview&ajaxhist=0&ajaxserp=0'
  }
  return (
    <div >
      <Comment 
      date={comment.date}
      author={comment.author}
      text={comment.author}
      />

      <Student firstName='Ivana' lastName='Horvat' age={40} uid='12345' />

      <University name='Algebra' location='Zagreb' rank='3' />
      
    </div>
  );
}


