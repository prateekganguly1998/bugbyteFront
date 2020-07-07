import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'
import Slider from "react-slick";
function Gallery(props) {
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            "https://bugbytebackend.herokuapp.com/watches"
        );
        setData(result.data);
    }, []);
    class Article extends Component{
      render() {
        var image = this.props.data.image,
            title = this.props.data.title,
            subtitle = this.props.data.description,
            price=this.props.data.price
        return (
          <figure className="snip1584">
            <img src={image} style={{height:'300px'}}/>
            <figcaption>
              <h3>{title}</h3>
              <p>{subtitle}</p>
               <h6>{price}</h6>
            </figcaption><a href="#"></a>
          </figure>
        )
      }
    }
    class News extends Component{
      render() {
        var data = this.props.data;
        var newsTemplate;
        var settings = {
          dots: true,
          infinite: data.length>3,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
        if (data.length > 0) {
          newsTemplate = data.map(function(item, index) {
            return (
                <div key={item.id}>
                  <Article data={item} />
                </div>
            )
          })
        } else {
          newsTemplate = <p>Please add some cards</p>
        }
        return (
          <div className='news'>
            <Slider {...settings}>{newsTemplate}</Slider>
            <strong className={'news__count ' + (data.length > 0 ? '':'none') }>
              <br/>
              Total watches: {data.length}
            </strong>
          </div>
        );
      }
    };
    return (
      <div className='app'>
				<h3>Watch Gallery</h3>
				<News data={data} />
			</div>
    );
}

export default Gallery;
