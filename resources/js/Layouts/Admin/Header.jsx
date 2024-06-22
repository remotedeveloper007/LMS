import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

const Header = () => {
    const { admin } = usePage().props;
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkLightMode = () => {
        setIsDarkMode(!isDarkMode);
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle('dark-theme');
        // Optionally, you can also toggle a class on the body element
        // document.body.classList.toggle('dark-theme');
    };    
    
    return (
        <header>
            <div className="topbar d-flex align-items-center">
                <nav className="navbar navbar-expand gap-3">
                    <div className="mobile-toggle-menu">
                        <i className="bx bx-menu"></i>
                    </div>

                    <div
                        className="position-relative search-bar d-lg-block d-none"
                        data-bs-toggle="modal"
                        data-bs-target="#SearchModal"
                    >
                        <input
                            className="form-control px-5"
                            disabled
                            type="search"
                            placeholder="Search"
                        />
                        <span className="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-5">
                            <i className="bx bx-search"></i>
                        </span>
                    </div>

                    <div className="top-menu ms-auto">
                        <ul className="navbar-nav align-items-center gap-1">
                            <li
                                className="nav-item mobile-search-icon d-flex d-lg-none"
                                data-bs-toggle="modal"
                                data-bs-target="#SearchModal"
                            >
                                <Link className="nav-link" href="avascript:;">
                                    <i className="bx bx-search"></i>
                                </Link>
                            </li>
                            <li className="nav-item dropdown dropdown-laungauge d-none d-sm-flex">
                                <Link
                                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                    href="avascript:;"
                                    data-bs-toggle="dropdown"
                                >
                                    <img
                                        src="../../../../assets/backend/images/county/02.png"
                                        width="22"
                                        alt=""
                                    />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        >
                                            <img
                                                src="../../../../assets/backend/images/county/01.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">
                                                English
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        > 
                                            <img
                                                src="../../../../assets/backend/images/county/02.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">
                                                Catalan
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        >
                                            <img
                                                src="../../../../assets/backend/images/county/03.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">French</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        >
                                            <img
                                                src="../../../../assets/backend/images/county/04.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">Belize</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        >
                                            <img
                                                src="../../../../assets/backend/images/county/05.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">
                                                Colombia
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        >
                                            <img
                                                src="../../../../assets/backend/images/county/06.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">
                                                Spanish
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        >
                                            <img
                                                src="../../../../assets/backend/images/county/07.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">
                                                Georgian
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center py-2"
                                            href="#"
                                        >
                                            <img
                                                src="../../../../assets/backend/images/county/08.png"
                                                width="20"
                                                alt=""
                                            />
                                            <span className="ms-2">Hindi</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dark-mode d-none d-sm-flex">
                                <Link
                                    className="nav-link dark-mode-icon"
                                    href="#"
                                    onClick={toggleDarkLightMode}
                                >
                                {/* <i className="bx bx-moon"></i> */}
                                {isDarkMode ? (
                                  <i className="bx bx-sun"></i> //Icon for light mode
                                ) : (
                                  <i className="bx bx-moon"></i> //Icon for dark mode
                                )}
                                </Link>
                            </li>

                            <li className="nav-item dropdown dropdown-large">
                                <Link
                                    className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    <span className="alert-count">7</span>
                                    <i className="bx bx-bell"></i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <Link href="#">
                                        <div className="msg-header">
                                            <p className="msg-header-title">
                                                Notifications
                                            </p>
                                            <p className="msg-header-badge">
                                                8 New
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="header-notifications-list">
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    {/* <img
                                                        src="../../../../assets/images/backend/avatars/avatar-1.png"
                                                        className="msg-avatar"
                                                        alt="user avatar"
                                                    /> */}
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        Daisy Anderson
                                                        <span className="msg-time float-end">
                                                            5 sec ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        The standard chunk of
                                                        lorem
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-danger text-danger">
                                                    dc
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        New Orders{" "}
                                                        <span className="msg-time float-end">
                                                            2 min ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        You have recived new
                                                        orders
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img
                                                        src="../../../../assets/backend/images/avatars/avatar-2.png"
                                                        className="msg-avatar"
                                                        alt="user avatar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        Althea Cabardo{" "}
                                                        <span className="msg-time float-end">
                                                            14 sec ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        Many desktop publishing
                                                        packages
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-success text-success">
                                                    <img
                                                        src="../../../../assets/backend/images/app/outlook.png"
                                                        width="25"
                                                        alt="user avatar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        Account Created
                                                        <span className="msg-time float-end">
                                                            28 min ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        Successfully created new
                                                        email
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-info text-info">
                                                    Ss
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        New Product Approved{" "}
                                                        <span className="msg-time float-end">
                                                            2 hrs ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        Your new product has
                                                        approved
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img
                                                        src="../../../../assets/backend/images/avatars/avatar-4.png"
                                                        className="msg-avatar"
                                                        alt="user avatar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        Katherine Pechon{" "}
                                                        <span className="msg-time float-end">
                                                            15 min ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        Making this the first
                                                        true generator
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-success text-success">
                                                    <i className="bx bx-check-square"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        Your item is shipped{" "}
                                                        <span className="msg-time float-end">
                                                            5 hrs ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        Successfully shipped
                                                        your item
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="notify bg-light-primary">
                                                    <img
                                                        src="../../../../assets/backend/images/app/github.png"
                                                        width="25"
                                                        alt="user avatar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        New 24 authors
                                                        <span className="msg-time float-end">
                                                            1 day ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        24 new authors joined
                                                        last week
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="user-online">
                                                    <img
                                                        src="../../../../assets/backend/images/avatars/avatar-8.png"
                                                        className="msg-avatar"
                                                        alt="user avatar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="msg-name">
                                                        Peter Costanzo{" "}
                                                        <span className="msg-time float-end">
                                                            6 hrs ago
                                                        </span>
                                                    </h6>
                                                    <p className="msg-info">
                                                        It was popularised in
                                                        the 1960s
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <Link href="#">
                                        <div className="text-center msg-footer">
                                            <button className="btn btn-primary w-100">
                                                View All Notifications
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown dropdown-large">
                                <Link
                                    className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {" "}
                                    <span className="alert-count">8</span>
                                    <i className="bx bx-shopping-bag"></i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <Link href="#">
                                        <div className="msg-header">
                                            <p className="msg-header-title">
                                                My Cart
                                            </p>
                                            <p className="msg-header-badge">
                                                10 Items
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="header-message-list">
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/11.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/02.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/03.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/04.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/05.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/06.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/07.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/08.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="position-relative">
                                                    <div className="cart-product rounded-circle bg-light">
                                                        <img
                                                            src="../../../../assets/backend/images/products/09.png"
                                                            className=""
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="cart-product-title mb-0">
                                                        Men White T-Shirt
                                                    </h6>
                                                    <p className="cart-product-price mb-0">
                                                        1 X $29.00
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <p className="cart-price mb-0">
                                                        $250
                                                    </p>
                                                </div>
                                                <div className="cart-product-cancel">
                                                    <i className="bx bx-x"></i>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <Link href="#">
                                        <div className="text-center msg-footer">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h5 className="mb-0">Total</h5>
                                                <h5 className="mb-0 ms-auto">
                                                    $489.00
                                                </h5>
                                            </div>
                                            <button className="btn btn-primary w-100">
                                                Checkout
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                
                    <div className="user-box dropdown px-3">
                        <Link
                            className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src={ admin.photo ? `../../../../assets/upload/admin_images/profile_img/${admin.photo}` : '../../../../assets/upload/sample.png' }
                                className="user-img"
                                alt="user avatar"
                            />
                            <div className="user-info">
                                <p className="user-name mb-0">
                                    {admin.name}
                                </p>
                                <p className="designattion mb-0">
                                    {admin.email}
                                </p>
                            </div>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    href={route('admin.profile')}
                                >
                                    <i className="bx bx-user fs-5"></i>
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    href="#"
                                >
                                    <i className="bx bx-cog fs-5"></i>
                                    <span>Change Password</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    href="#"
                                >
                                    <i className="bx bx-home-circle fs-5"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    href="#"
                                >
                                    <i className="bx bx-dollar-circle fs-5"></i>
                                    <span>Earnings</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    href="#"
                                >
                                    <i className="bx bx-download fs-5"></i>
                                    <span>Downloads</span>
                                </Link>
                            </li>
                            <li>
                                <div className="dropdown-divider mb-0"></div>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item d-flex align-items-center"
                                    href={route('admin.logout')}
                                >
                                    <i className="bx bx-log-out-circle"></i>
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
