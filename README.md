# What I did

I tried to replicate the design sent to me as much as possible. But I changed the colors, and added some pictures as requested.

The website is hopefully fully responsive. I used Tailwind CSS for that (first time ever).

# Reactivity

* On mobile size, navigation links are shown and hidden by clicking on the bars icon. This uses a vue state "showDropdownMenu" to control it.

* Number of items: if you click on any "add to cart" button, it adds one element to the cart. I used VueX for state management for this, since I can commit mutations from any component, and avoid prop-drilling.

* Initially, I hard-coded the products' values. Then, I used https://fakestoreapi.com/ to get the fake data, highlighting the asynchronous JavaScript, and using the mount() lifecycle hook.

# Features

This web app has routing, with the navigation bar, top bar, and the footer consistent across all pages, and a dynamic middle section.

The app consists of three routes: landing, featured products, and a featured product route.

## Landing

It consists of:

* Hero section: A picture placeholder on one side, and some text on the other. I didn't have enough time in the end to add an image, since I was occupied with more urgent tasks on the app. It is responsive, as the picture hangs above the text on smaller devices, and on the right of it on larger devices.

* A banners section: not exactly sure of its purpose. It is responsive too, using gridbox.

* Featured products section: It showcases the first four products fetched, with a "view all" button beneath it, that leads to the "featured products" route. Also responsive, using gridbox. The product's title had to be truncated because it kept push the price and the button further.

## Featured products

It consists of:

* A banner header and some routing tree that is not functional.

* Filter options: I had some ideas about how to filter the products. In the end, I stuck with the design proposed to me, and showcased the JS reactivity in other areas.

* Products section: Shows all products.

## Featured product

In the "featured products" route, if you go to this route by clicking the product title.
Each product has only one image, so I displayed it as the main one, the other boxes were kept as placeholder.

The main thing I want you to see, is the "quantity option". You can choose the number of items (0 is the default), and ifyou click on "add to cart", it will be added. Just check the top of the screen to see it reflected on the number of items.

# Please read this

1) I used Tailwind CSS for the first time ever. I took me less than 30 minutes after reading the documentaion to start working with it. The installing, setup, and getting it to work was frustrating at first, but when it did, it was so smooth. I even started customising my theme (I changed the colors quickly thanks to this, and added a custom breakpoint "mlg", at 992px width).

2) The Hero section apparently is a carousel. I left it "temporarily" until I comeback for it later. I didn't have time for it unfortunately.

3) I changed the colors, and added pictures, because I thought it was required. While my main focus was to prove that I can work with SPA JS libraries, I took some time to implement them, even though the design is not the same now as the one sent to me.

4) I hope that by this test, I proved that I can work effectively as a front-end developer.
I created a responsive design, I used state, routing, lifecycle methods.