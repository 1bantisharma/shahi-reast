import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactusComponent';
import About from './AboutComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      setId: null
    };
  }

  setfunc(id) {
    this.setState({
      setId: id,
    });
  }

  render() {
    const HomePage = () => {
      return (
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<Menu dishes={this.state.dishes} onClick={(id) => this.setfunc(id)} />} />
          <Route path="/dishdetail" element={<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.setId)[0]} comments={this.state.comments} />} />
          <Route path="/aboutus" element={<About leaders={this.state.leaders} />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
