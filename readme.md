# React Router

## Membuat Component Navabar, Footer & Home

    Todo :
    1.  Navbar.jsx
    2.  Footer.jsx
    3.  Home.jsx
        - import dan pasang component:
            Navbar
            Footer
    4.  App.js
        - import dan pasang component:
            Home

## Styling Component Navabar & Footer

    Todo :
    1.  Navbar.jsx
        - menambahkan styling
    2.  Footer.jsx
        - menambahkan styling
    3.  Index.css
        - menambahkan styling untuk body margin : 0

## Styling Component Home & State Object

    Todo :
    1.  Navbar.jsx
        - merapihkan navbar
    2.  Home.jsx
        - deklarasi state ,yang isinya array of object
        - destructuring assignment
        - menampilkan daftar skill pada halaman web
        - menambahkan styling

## Setup Router di ReactJs

    Todo :
    1.  install react-router-dom
        - npm add react-router-dom
    2.  main.jsx
        - import dan pasang BrowserRouter dari react-router-dom
        - panggil file App.jsx
    3.  App.jsx
        - import dan pasang Route dari react-router-dom
        - link : https://v5.reactrouter.com/web/api/Route

## Membuat View halaman About

    Todo :
    1.  About.jsx
    2.  App.jsx
        - panggil component About
        - pasang exact pada Route Home
    3.  pengujian pada browser:
        http://localhost:5173/about

## Membuat View halaman Contact

    Todo :
    1.  Contact.jsx
        - copy dari About.jsx karna sama
    2.  App.jsx
        - panggil component Contact
    3.  pengujian pada browser:
        http://localhost:5173/contact

## Menambahkan Link Navigasi

    Todo :
    1.  Navbar.jsx
        - import dan pasang Link dari react-router-dom
    2.  pengujian pada browser:
        - klik menu About, Home, contact
          jika setup ynag kita lakukan berhasil maka akan berpindah sesuai pagenya

## Layouting Aplikasi React

    Todo :
    1.  MainLayout.jsx
        - import dan pasang Navabr & Footer
    2.  Home.jsx
        - import dan pasang MainLayout
    3.  About.jsx
        - import dan pasang MainLayout
    4.  Contact.jsx
        - import dan pasang MainLayout
    5.  pengujian pada browser:
        - klik menu About, Home, contact
          jika setup ynag kita lakukan berhasil maka akan berpindah sesuai pagenya

## Refactor Route

    Todo :
    1.  Router.jsx
        - import Route dari react-router-dom
        - cut Route path dari App.jsx
        - import dan pasang Navabr ,Footer & Home
    2.  App.jsx
        - cut Route path dan pidahkan ke Router.jsx
        - import dan pasang Router
    3.  pengujian pada browser:
        - klik menu About, Home, contact
          jika setup ynag kita lakukan berhasil maka akan berpindah sesuai pagenya
