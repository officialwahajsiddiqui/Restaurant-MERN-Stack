import React, { useState } from 'react'
import HeroSection from './miniComponents/HeroSection'
import useResponsive from '../hooks/useResponsive'

const Menu = () => {
    const [activeTab, setActiveTab] = useState('tab-1')
    const { isMobile } = useResponsive()

    const handleTabClick = (tabId) => {
        setActiveTab(tabId)
    }

    return (
        <>
            <HeroSection heading={'Food Menu'} breadcrumbLast={'Menu'} />
            {/* Menu Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                            Food Menu
                        </h5>
                        <h1 className="mb-5">Most Popular Items</h1>
                    </div>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className={`nav-container ${isMobile ? 'scrollable-tabs' : ''}`}>
                            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                <li className="nav-item">
                                    <a
                                        className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${activeTab === 'tab-1' ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleTabClick('tab-1')
                                        }}
                                        href="#tab-1"
                                    >
                                        <i className="fa fa-coffee fa-2x text-primary" />
                                        <div className="ps-3">
                                            <small className="text-body">Popular</small>
                                            <h6 className="mt-n1 mb-0">Breakfast</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`d-flex align-items-center text-start mx-3 pb-3 ${activeTab === 'tab-2' ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleTabClick('tab-2')
                                        }}
                                        href="#tab-2"
                                    >
                                        <i className="fa fa-hamburger fa-2x text-primary" />
                                        <div className="ps-3">
                                            <small className="text-body">Special</small>
                                            <h6 className="mt-n1 mb-0">Launch</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${activeTab === 'tab-3' ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleTabClick('tab-3')
                                        }}
                                        href="#tab-3"
                                    >
                                        <i className="fa fa-utensils fa-2x text-primary" />
                                        <div className="ps-3">
                                            <small className="text-body">Lovely</small>
                                            <h6 className="mt-n1 mb-0">Dinner</h6>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className={`tab-pane fade show p-0 ${activeTab === 'tab-1' ? 'active' : ''}`}>
                                <div className="row g-4">
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center menu-item">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-1.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-2.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-3.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-4.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-5.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-6.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-7.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-8.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-1.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center menu-item">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-2.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-3.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-4.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-5.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-6.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-7.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-8.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-1.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-2.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-3.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-4.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-5.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-6.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${isMobile ? 'col-12' : 'col-lg-6'}`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-7.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="flex-shrink-0 img-fluid rounded"
                                                src="img/menu-8.jpg"
                                                alt=""
                                                style={{ width: 80 }}
                                            />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">
                                                    Ipsum ipsum clita erat amet dolor justo diam
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu End */}


        </>
    )
}

export default Menu
