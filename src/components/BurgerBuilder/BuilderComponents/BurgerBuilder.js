import { object } from 'prop-types';
import React, { Component } from 'react'
import { Burger, BurgerControls } from "../index"

const INGREDIENT_PRICE = {
    salad: 15,
    bacon: 36,
    cheese: 27,
    meat: 48,
    tamato: 16,
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0, price: 10,
            bacon: 0,
            cheese: 0,
            meat: 0,
            tamato: 0,
        },
        totalPrice: 25,
        Purchase: false
    }

    updatePurchase() {
        const ingredients = {
            ...this.state.key(ingredients)
        };
        const sum = object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ Purchase: sum > 0 })
    }



    addIngredient = (type) => {
        const OldCount = this.state.ingredients[type];

        const updateCounted = OldCount + 1;
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = updateCounted;
        const priceAdd = INGREDIENT_PRICE[type];
        const oldprice = this.state.totalPrice;
        const newPrice = oldprice + priceAdd;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredient });


    }
    removeIngredient = (type) => {

        const OldCount = this.state.ingredients[type];
        if (OldCount <= 0) {
            return;
        }
        const updateCounted = OldCount - 1;
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = updateCounted;
        const priceDecduction = INGREDIENT_PRICE[type];
        const oldprice = this.state.totalPrice;
        const newPrice = oldprice - priceDecduction;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredient });


    }


    render() {
        const disableBtn = {
            ...this.state.ingredients
        };
        for (let key in disableBtn) {
            disableBtn[key] = disableBtn[key] <= 0
        }
        return (
            <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-between w-full "
            >
                <Burger ingredients={this.state.ingredients}


                />

                <div >
                    < BurgerControls

                        addedingrident={this.addIngredient}
                        removeIngrident={this.removeIngredient}
                        disable={disableBtn}
                        price={this.state.totalPrice}
                        puchase={this.state.puchase}

                    />
                </div>

            </section>

        )
    }
}

export default BurgerBuilder