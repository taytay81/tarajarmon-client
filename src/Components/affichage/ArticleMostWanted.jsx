import React, { Component } from 'react'
import Slider from "react-slick";
import api from "../../api/APIHandler";
import "../../Styles/ArticleMostWanted.css";
import Article from "./Article";
import { Link } from "react-router-dom";
import "./../../../node_modules/slick-carousel/slick/slick.css"
import "./../../../node_modules/slick-carousel/slick/slick-theme.css"


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

export default class ArticleMostWanted extends Component {
    state = {
        allArticlesAvailable: [],
      };
      componentDidMount() {
        
          api
            .get("/articles/MostWanted")
            .then((resultat) => {
                console.log(resultat.data)
              this.setState({ allArticlesAvailable: resultat.data });
            })
            .catch((err) => {
              console.error(err);
            });
        
    }
    
    render() {
        return (
            <div className="slider-content">
            <h2> Most Wanted </h2>
            <Slider {...settings}>
              
              {Boolean(this.state.allArticlesAvailable.length) &&
              this.state.allArticlesAvailable.map((article, i) => (
                  <div> <Link
                  key={i}
                  className="link"
                  to={{
                    pathname: `/articles/detail/${article._id}`,
                    state: {
                      breadcrum: this.props.breadcrum,
                    },
                  }}
                >
                  <Article key={i} articleValue={article}></Article>
                </Link></div>
               
                  
                
                ))}
                {/*

<div>
{Boolean(this.state.allArticlesAvailable.length) &&
<Link
                  
                  className="link"
                  to={{
                    pathname: `/articles/detail/${this.state.allArticlesAvailable[0]._id}`,
                    state: {
                      breadcrum: this.props.breadcrum,
                    },
                  }}
                >
                  <Article  articleValue={this.state.allArticlesAvailable[0]}></Article>
                </Link>
    }
          </div>
          <div>
{Boolean(this.state.allArticlesAvailable.length) &&
<Link
                  
                  className="link"
                  to={{
                    pathname: `/articles/detail/${this.state.allArticlesAvailable[1]._id}`,
                    state: {
                      breadcrum: this.props.breadcrum,
                    },
                  }}
                >
                  <Article  articleValue={this.state.allArticlesAvailable[1]}></Article>
                </Link>
    }
          </div>
          <div>
        {Boolean(this.state.allArticlesAvailable.length) &&
        <Link className="link"
                  to={{
                    pathname: `/articles/detail/${this.state.allArticlesAvailable[2]._id}`,
                    state: {
                      breadcrum: this.props.breadcrum,
                    },
                  }}
                >
                  <Article  articleValue={this.state.allArticlesAvailable[2]}></Article>
                </Link>
    }
          </div>
          <div>
        {Boolean(this.state.allArticlesAvailable.length) &&
        <Link className="link"
                  to={{
                    pathname: `/articles/detail/${this.state.allArticlesAvailable[3]._id}`,
                    state: {
                      breadcrum: this.props.breadcrum,
                    },
                  }}
                >
                  <Article  articleValue={this.state.allArticlesAvailable[3]}></Article>
                </Link>
    }
          </div>






          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
             */ }
              
              
            </Slider>
          </div>
        )
    }
}





