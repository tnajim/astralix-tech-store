# Astralix Tech Store
An ecommerce application made with [React](https://react.dev/) and [Next.js](https://nextjs.org/) for the front end, [Sanity](https://www.sanity.io/) for the data, and [Stripe](https://stripe.com/) for payments

![homepage](https://github.com/tnajim/astralix-tech-store/assets/47018694/947d4d80-3740-4a70-9c03-7648874900c7)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the project locally (personal guide)

- install dependencies with ```npm install``` in the terminal
- setup sanity and stripe
- then run the development server ```npm run dev```
- open the localhost:3000 link in the terminal

## Running the sanity server to edit products

- run ```cd sanity_astralix/``` in the terminal
- then run ```npm run dev```
- open the localhost:3333 link in the terminal
- test stripe payment with test cards:
  ![stripe-testing](https://github.com/tnajim/astralix-tech-store/assets/47018694/98869675-b3b2-4d5e-975c-47a1edc5aa36)


### Sanity (headless CMS)
![sanity cms](https://github.com/tnajim/astralix-tech-store/assets/47018694/81f0faa6-4c95-4e00-bef8-096bf754e4b8)

### Product Page
![product-page](https://github.com/tnajim/astralix-tech-store/assets/47018694/d550e9fd-9206-4e55-8119-8a02ae0a855d)

### Cart
![cart](https://github.com/tnajim/astralix-tech-store/assets/47018694/02471986-10e2-4d2d-9c1f-46937753c304)

### Stripe Payment
![payment](https://github.com/tnajim/astralix-tech-store/assets/47018694/cbd0588c-e5f4-4846-a16d-cfa7afa5fa89)

### Stripe Payments Dashboard
![stripe-payments](https://github.com/tnajim/astralix-tech-store/assets/47018694/deed4d49-1fcc-4c17-91f2-97c52942dbb0)


# Live Project Link

TBA

# to do:
- fix possible token leak in client-side javascript
- ~~fix logo image not loading properly when product directly without building~~
- ~~secure payments by fetching prices server-side instead of exposing line_items to potential client-side editing~~
