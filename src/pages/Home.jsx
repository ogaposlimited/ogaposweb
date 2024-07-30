import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import white from "./home.png";
import young from "./shopping.jpg";
import old from "./shop2.jpg";
import Navbar from "../components/Navbar";
import step from "./step.png";
import "./home.css";
import Footer from "../components/Footer";
const Home = () => {
  const whiteSrcSet = `${white} 800w, ${white} 213w, ${white} 726w, ${white} 768w`;
  const blackSrcSet = `${step} 1000w, ${step} 258w, ${step} 879w, ${step} 768w, ${step} 800w`;

  return (
    <>
      <body class="home page-template page-template-elementor_header_footer page page-id-546 ehf-template-hello-elementor ehf-stylesheet-hello-elementor jkit-color-scheme elementor-default elementor-template-full-width elementor-kit-3 elementor-page elementor-page-546">
        <div id="page" class="jkit-template  site">
          <Navbar />
          <div
            data-elementor-type="wp-page"
            data-elementor-id="546"
            class="elementor elementor-546"
          >
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-35bae01 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="35bae01"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div class="elementor-background-overlay"></div>
              <div class="elementor-container elementor-column-gap-default custom-container">
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2014433c text-column"
                  data-id="2014433c"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-367469e6 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="367469e6"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div class="elementor-widget-container">
                        <ul class="elementor-icon-list-items">
                          <li class="elementor-icon-list-item">
                            <span class="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                class="far fa-dot-circle"
                              ></i>
                            </span>
                            <span class="elementor-icon-list-text">
                              The safest, fastest and reliable payment services
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-d11c234 elementor-widget elementor-widget-heading"
                      data-id="d11c234"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h1 class="elementor-heading-title elementor-size-default">
                          Send, Receive, buy Airtime, Pay all Bills easily
                        </h1>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-3469c42c elementor-widget elementor-widget-text-editor"
                      data-id="3469c42c"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <p style={{ color: "black", fontWeight: "600" }}>
                          OGAPOS is your safest, fastest and most reliable way
                          to get cash, send cash, paybills, buy Airtime and
                          data, Get cash when you need it and where you need it,
                          and with our Ajo(Thrift), you become financially free.
                          Let's grow your business without stress and make your
                          dream a reality
                        </p>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-613bc785 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button"
                      data-id="613bc785"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-button-wrapper">
                          <a
                            class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                            href="#"
                          >
                            <span class="elementor-button-content-wrapper">
                              <span class="elementor-button-text">
                                Get Started
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-5b1c9398 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button"
                      data-id="5b1c9398"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-button-wrapper">
                          <a
                            class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                            href="#"
                          >
                            <span class="elementor-button-content-wrapper">
                              <span class="elementor-button-text">
                                Learn More
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-47b9aee4 image-column"
                  data-id="47b9aee4"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-beaf32b elementor-widget elementor-widget-image"
                      data-id="beaf32b"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          decoding="async"
                          width="800"
                          height="1128"
                          src={white}
                          class="attachment-full size-full wp-image-214 responsive-image"
                          alt=""
                          srcSet={whiteSrcSet}
                          // style={{ height: "700px", width: "1500px" }}

                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-758423bb elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-spacer"
                      data-id="758423bb"
                      data-element_type="widget"
                      data-settings='{"_position":"absolute"}'
                      data-widget_type="spacer.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-spacer">
                          <div class="elementor-spacer-inner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-60412ca8 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="60412ca8"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2c7e4b49"
                  data-id="2c7e4b49"
                  data-element_type="column"
                  data-settings='{"background_background":"gradient"}'
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-background-overlay"></div>
                    <div
                      class="elementor-element elementor-element-7fd12ac0 elementor-widget elementor-widget-heading"
                      data-id="7fd12ac0"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">
                          Getting cash made easier with OGAPOS
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-2a696376 elementor-widget elementor-widget-text-editor"
                      data-id="2a696376"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <p>
                          Do you want to get cash delivered to you at your
                          doorstep or do you want to exchange money very quick,
                          Enter your email to make a request or{" "}
                          <a href="contact">Contact Us</a>
                        </p>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-3629f0ff elementor-widget elementor-widget-jkit_mailchimp"
                      data-id="3629f0ff"
                      data-element_type="widget"
                      data-widget_type="jkit_mailchimp.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-mailchimp style-inline jeg_module_546_1_66a669ed3a02e">
                          <form
                            method="post"
                            class="jkit-mailchimp-form"
                            data-listed=""
                            data-success-message="Successfully listed this email"
                            data-error-message="Something went wrong"
                          >
                            <div class="jkit-mailchimp-message"></div>
                            <div class="jkit-form-wrapper email-form">
                              <div class="jkit-mailchimp-email jkit-input-wrapper input-container">
                                <div class="jkit-form-group">
                                  <div class="jkit-input-element-container jkit-input-group">
                                    <input
                                      type="email"
                                      name="email"
                                      class="jkit-email jkit-form-control "
                                      placeholder="Your Email"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="jkit-submit-input-holder jkit-input-wrapper">
                                <button
                                  type="submit"
                                  class="jkit-mailchimp-submit position-before"
                                  name="jkit-mailchimp"
                                >
                                  Request
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5b55516a"
                  data-id="5b55516a"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-79ab93b2 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="79ab93b2"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-57723f42"
                          data-id="57723f42"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-107cb6fd elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="107cb6fd"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div class="elementor-widget-container">
                                <ul class="elementor-icon-list-items">
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      POS
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Cash exchange and<br></br> delivery
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Airtime & Data
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Utility Bills
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Electricity & Cable TV
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Waste Bills
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Ajo(Thrift)
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-45f27f2f"
                          data-id="45f27f2f"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-1ab91606 elementor-widget elementor-widget-heading"
                              data-id="1ab91606"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <h3 class="elementor-heading-title elementor-size-default">
                                  How Can We Help You?
                                </h3>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-ba3c4b4 elementor-widget elementor-widget-text-editor"
                              data-id="ba3c4b4"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div class="elementor-widget-container">
                                <ul>
                                  <li>
                                    <strong>Get Cash:</strong> Access cash
                                    quickly and conveniently, whenever and
                                    wherever you need it.
                                  </li>
                                  <li>
                                    <strong>Send Cash:</strong> Safely and
                                    securely send money to family and friends.
                                  </li>
                                  <li>
                                    <strong>Pay Bills:</strong> Pay your utility
                                    bills, school fees, and other expenses with
                                    ease.
                                  </li>
                                  <li>
                                    <strong>Buy Airtime and Data:</strong>{" "}
                                    Purchase airtime and data bundles instantly
                                    for all major networks.
                                  </li>
                                  <li>
                                    <strong>Ajo (Thrift):</strong> Join our
                                    thrift program to save money, manage your
                                    finances better, and achieve financial
                                    freedom.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-70517ccf elementor-align-left elementor-widget elementor-widget-button"
                              data-id="70517ccf"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-icon elementor-align-icon-right">
                                        <i
                                          aria-hidden="true"
                                          class="fas fa-long-arrow-alt-right"
                                        ></i>{" "}
                                      </span>
                                      <span class="elementor-button-text">
                                        Read More
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-412910ae elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="412910ae"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-606c6d3d"
                  data-id="606c6d3d"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-503d63fd elementor-widget elementor-widget-image"
                      data-id="503d63fd"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          decoding="async"
                          src={young}
                          title="Young Handsome man enjoy shopping online on mobile phone with credit card"
                          alt="Young Handsome man enjoy shopping online on mobile phone with credit card"
                          loading="lazy"
                        />{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-36d45e50 elementor-hidden-mobile elementor-widget elementor-widget-image"
                      data-id="36d45e50"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          decoding="async"
                          src={old}
                          // style={{ width: "1500px", height: "1000px" }}
                          title="happy beautiful woman holding credit card in hand and sitting on sofa with laptop"
                          alt="happy beautiful woman holding credit card in hand and sitting on sofa with laptop"
                          loading="lazy"
                        />{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-63c9c98 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-jkit_fun_fact"
                      data-id="63c9c98"
                      data-element_type="widget"
                      data-settings='{"_position":"absolute"}'
                      data-widget_type="jkit_fun_fact.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_546_2_66a669ed4629e">
                          <div class="fun-fact-inner">
                            <div class="content">
                              <div class="number-wrapper">
                                <span class="prefix"></span>
                                <span
                                  class="number"
                                  data-value="1485"
                                  data-animation-duration="3500"
                                >
                                  0
                                </span>
                                <span class="suffix"></span>
                                <sup class="super">+</sup>
                              </div>
                              <h5 class="title">Trusted Clients</h5>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-324f5aa"
                  data-id="324f5aa"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-197c76fe elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="197c76fe"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div class="elementor-widget-container">
                        <ul class="elementor-icon-list-items">
                          <li class="elementor-icon-list-item">
                            <span class="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                class="far fa-dot-circle"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text">
                              About OGA POS
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-775145f5 elementor-widget elementor-widget-heading"
                      data-id="775145f5"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">
                          We have the best payment services in Nigeria
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-274131 elementor-widget elementor-widget-text-editor"
                      data-id="274131"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      {/*}   <div class="elementor-widget-container">
                        <p>
                          Our mission is to help people have access to quick
                          cash, paying of bills quickly, buying airtime or data
                          quickly, savings and thrift to enable people grow
                          their businesses, quick exchange of currency and lot
                          more. We do not compromise standard.
                        </p>{" "}
                      </div>*/}
                    </div>
                    <div
                      class="elementor-element elementor-element-6b578998 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                      data-id="6b578998"
                      data-element_type="widget"
                      data-widget_type="jkit_icon_box.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_546_3_66a669ed4bdcc">
                          <div class="jkit-icon-box-wrapper hover-from-left">
                            <div class="icon-box icon-box-header elementor-animation-">
                              <div class="icon style-color">
                                <i
                                  aria-hidden="true"
                                  class="jki jki-users-light"
                                ></i>
                              </div>
                            </div>
                            <div class="icon-box icon-box-body">
                              <h3 class="title">We are Safe</h3>
                              <p class="icon-box-description">
                                Your security is our top priority. With OGAPOS,
                                you can be assured that all your transactions
                                are protected, giving you peace of mind every
                                step of the way.
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-3110744f jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                      data-id="3110744f"
                      data-element_type="widget"
                      data-widget_type="jkit_icon_box.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_546_4_66a669ed4cdf5">
                          <div class="jkit-icon-box-wrapper hover-from-left">
                            <div class="icon-box icon-box-header elementor-animation-">
                              <div class="icon style-color">
                                <i
                                  aria-hidden="true"
                                  class="jki jki-laptop-phone-light"
                                ></i>
                              </div>
                            </div>
                            <div class="icon-box icon-box-body">
                              <h3 class="title">We are Fast</h3>
                              <p class="icon-box-description">
                                Time is money, and we value yours. OGAPOS
                                ensures that all your transactions are processed
                                swiftly and efficiently, so you can get cash,
                                send money, pay bills, and purchase airtime and
                                data in a matter of seconds.
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-2fb0dc12 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                      data-id="2fb0dc12"
                      data-element_type="widget"
                      data-widget_type="jkit_icon_box.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_546_5_66a669ed4dd6e">
                          <div class="jkit-icon-box-wrapper hover-from-left">
                            <div class="icon-box icon-box-header elementor-animation-">
                              <div class="icon style-color">
                                <i
                                  aria-hidden="true"
                                  class="jki jki-line-light"
                                ></i>
                              </div>
                            </div>
                            <div class="icon-box icon-box-body">
                              <h3 class="title">We are reliable</h3>
                              <p class="icon-box-description">
                                Trust is earned, and we are committed to earning
                                yours. OGAPOS stands out for its consistent and
                                dependable services, ensuring that you can rely
                                on us for all your financial needs, every time.
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-1db43f97 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="1db43f97"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div class="elementor-background-overlay"></div>
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-56bf1ebe"
                  data-id="56bf1ebe"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-16bea2a4 elementor-widget elementor-widget-jkit_fun_fact"
                      data-id="16bea2a4"
                      data-element_type="widget"
                      data-widget_type="jkit_fun_fact.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_546_6_66a669ed50518">
                          <div class="fun-fact-inner">
                            <div class="content">
                              <div class="number-wrapper">
                                <span class="prefix"></span>
                                <span
                                  class="number"
                                  data-value="25"
                                  data-animation-duration="3500"
                                >
                                  0
                                </span>
                                <span class="suffix"></span>
                                <sup class="super">+</sup>
                              </div>
                              <h5 class="title">Years Of Experience</h5>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-60995b3d"
                  data-id="60995b3d"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-1da5777a elementor-widget elementor-widget-jkit_fun_fact"
                      data-id="1da5777a"
                      data-element_type="widget"
                      data-widget_type="jkit_fun_fact.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_546_7_66a669ed522e9">
                          <div class="fun-fact-inner">
                            <div class="content">
                              <div class="number-wrapper">
                                <span class="prefix"></span>
                                <span
                                  class="number"
                                  data-value="3452"
                                  data-animation-duration="3500"
                                >
                                  0
                                </span>
                                <span class="suffix"></span>
                                <sup class="super">+</sup>
                              </div>
                              <h5 class="title">Total Transaction</h5>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-35ee1887"
                  data-id="35ee1887"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-f5f647 elementor-widget elementor-widget-jkit_fun_fact"
                      data-id="f5f647"
                      data-element_type="widget"
                      data-widget_type="jkit_fun_fact.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_546_8_66a669ed54053">
                          <div class="fun-fact-inner">
                            <div class="content">
                              <div class="number-wrapper">
                                <span class="prefix"></span>
                                <span
                                  class="number"
                                  data-value="751"
                                  data-animation-duration="3500"
                                >
                                  0
                                </span>
                                <span class="suffix"></span>
                                <sup class="super">+</sup>
                              </div>
                              <span class="title">Active User</span>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3b5b89fd"
                  data-id="3b5b89fd"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-19821ac0 elementor-widget elementor-widget-jkit_fun_fact"
                      data-id="19821ac0"
                      data-element_type="widget"
                      data-widget_type="jkit_fun_fact.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_546_9_66a669ed55f46">
                          <div class="fun-fact-inner">
                            <div class="content">
                              <div class="number-wrapper">
                                <span class="prefix"></span>
                                <span
                                  class="number"
                                  data-value="592"
                                  data-animation-duration="3500"
                                >
                                  0
                                </span>
                                <span class="suffix"></span>
                                <sup class="super">+</sup>
                              </div>
                              <h5 class="title">Positive Reviews</h5>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-7f391154 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="7f391154"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div class="elementor-background-overlay"></div>
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-30fdf73d"
                  data-id="30fdf73d"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-46a16bea elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="46a16bea"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div class="elementor-widget-container">
                        <ul class="elementor-icon-list-items">
                          <li class="elementor-icon-list-item">
                            <span class="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                class="far fa-dot-circle"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text">
                              Our Services
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-1f52f164 elementor-widget elementor-widget-heading"
                      data-id="1f52f164"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">
                          We Prioritize Customer Satisfaction
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-313759eb elementor-widget elementor-widget-text-editor"
                      data-id="313759eb"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <p>
                          At OGAPOS, we are dedicated to ensuring your complete
                          satisfaction. Our services are designed to be
                          user-friendly, reliable, and tailored to meet your
                          needs. Whether you are accessing cash, sending money,
                          paying bills, or purchasing airtime and data, we
                          strive to provide an exceptional experience every
                          time. Let OGAPOS help you achieve your financial goals
                          with ease and convenience.
                        </p>
                      </div>
                    </div>
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-4de9c50f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="4de9c50f"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-300ee8a5"
                          data-id="300ee8a5"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-62454ff2 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="62454ff2"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-padlock-1-light"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-7181f6be jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="7181f6be"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_10_66a669ed5a1ed">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">
                                        POS (Get cash, send cash etc)
                                      </h3>
                                      <p class="icon-box-description">
                                        Access cash quickly and conveniently,
                                        whenever and wherever you need it,
                                        Safely and securely send money to family
                                        and friends.
                                      </p>
                                      <div class="icon-box-button ">
                                        <div class="btn-wrapper icon-position-after">
                                          <a
                                            href="#"
                                            class="icon-box-link"
                                            aria-label="Read More"
                                          >
                                            Read More
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-long-arrow-alt-right"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-73ad87b6"
                          data-id="73ad87b6"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-4f7b4c3e elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="4f7b4c3e"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-pie-chart1-light"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-7df4e3 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="7df4e3"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_11_66a669ed5c090">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">Utility Bills</h3>
                                      <p class="icon-box-description">
                                        Pay your utility bills, school fees, and
                                        other expenses with ease.
                                      </p>
                                      <div class="icon-box-button ">
                                        <div class="btn-wrapper icon-position-after">
                                          <a
                                            href="#"
                                            class="icon-box-link"
                                            aria-label="Read More"
                                          >
                                            Read More
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-long-arrow-alt-right"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1ed2e305 elementor-hidden-tablet"
                          data-id="1ed2e305"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-1137d1a1 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="1137d1a1"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-thumbs-up-line"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-8165fa4 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="8165fa4"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_12_66a669ed5dd4d">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">Airtime and Data</h3>
                                      <p class="icon-box-description">
                                        Purchase airtime and data bundles
                                        instantly for all major networks.
                                      </p>
                                      <div class="icon-box-button ">
                                        <div class="btn-wrapper icon-position-after">
                                          <a
                                            href="#"
                                            class="icon-box-link"
                                            aria-label="Read More"
                                          >
                                            Read More
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-long-arrow-alt-right"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-9bc2bb0 elementor-section-content-middle elementor-hidden-desktop elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="9bc2bb0"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f5a80ea"
                          data-id="f5a80ea"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-4fd8cc7 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="4fd8cc7"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-thumbs-up-line"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-7826738 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="7826738"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_13_66a669ed601dc">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">No Hidden Fees</h3>
                                      <p class="icon-box-description">
                                        Lorem ipsum dolor sit amet, consect
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore eius.
                                      </p>
                                      <div class="icon-box-button ">
                                        <div class="btn-wrapper icon-position-after">
                                          <a
                                            href="#"
                                            class="icon-box-link"
                                            aria-label="Read More"
                                          >
                                            Read More
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-long-arrow-alt-right"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-81c4e61"
                          data-id="81c4e61"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-0434898 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="0434898"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-support-light"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-c7e2368 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="c7e2368"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_14_66a669ed6200d">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">Ajo(Thrift)</h3>
                                      <p class="icon-box-description">
                                        Join our thrift program to save money,
                                        manage your finances better, and achieve
                                        financial freedom.
                                      </p>
                                      <div class="icon-box-button ">
                                        <div class="btn-wrapper icon-position-after">
                                          <a
                                            href="#"
                                            class="icon-box-link"
                                            aria-label="Read More"
                                          >
                                            Read More
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-long-arrow-alt-right"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-31ec616a elementor-section-content-bottom elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="31ec616a"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7062f580"
                          data-id="7062f580"
                          data-element_type="column"
                          data-settings='{"background_background":"gradient"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-background-overlay"></div>
                            <div
                              class="elementor-element elementor-element-2b565aa8 elementor-widget elementor-widget-jkit_heading"
                              data-id="2b565aa8"
                              data-element_type="widget"
                              data-widget_type="jkit_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-heading  align-left align-tablet- align-mobile- jeg_module_546_15_66a669ed668b0">
                                  <div class="heading-section-title  display-inline-block">
                                    <h2 class="heading-title">
                                      Explore More Services
                                    </h2>
                                  </div>
                                  <div class="heading-section-description">
                                    <p>
                                      Do you want to see more of our services?
                                    </p>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-24ba8e8c elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button"
                              data-id="24ba8e8c"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-text">
                                        More Services
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5a5b79b5 elementor-hidden-tablet"
                          data-id="5a5b79b5"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-78030622 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="78030622"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-support-light"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-1e2b66f0 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="1e2b66f0"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_16_66a669ed6ab31">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">Ajo(Thrift)</h3>
                                      <p class="icon-box-description">
                                        Join our thrift program to save money,
                                        manage your finances better, and achieve
                                        financial freedom.
                                      </p>
                                      <div class="icon-box-button ">
                                        <div class="btn-wrapper icon-position-after">
                                          <a
                                            href="#"
                                            class="icon-box-link"
                                            aria-label="Read More"
                                          >
                                            Read More
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-long-arrow-alt-right"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-51947f08"
                          data-id="51947f08"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-7e0830b1 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="7e0830b1"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-shopping-bag-line"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-177ffb4c jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="177ffb4c"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_17_66a669ed6e3e8">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">
                                        Waste Bill and Electricity bill
                                      </h3>
                                      <p class="icon-box-description">
                                        Pay your waste bill bills, electricity
                                        bill, cable tv(dstc, gotv etc) with
                                        OGAPOS
                                      </p>
                                      <div class="icon-box-button ">
                                        <div class="btn-wrapper icon-position-after">
                                          <a
                                            href="#"
                                            class="icon-box-link"
                                            aria-label="Read More"
                                          >
                                            Read More
                                            <i
                                              aria-hidden="true"
                                              class="fas fa-long-arrow-alt-right"
                                            ></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-77948de6 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="77948de6"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-525b53a1"
                  data-id="525b53a1"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-3d8468f9 elementor-widget elementor-widget-image"
                      data-id="3d8468f9"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div class="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="1000"
                          height="1165"
                          src={step}
                          class="attachment-full size-full wp-image-246"
                          alt=""
                          srcSet={blackSrcSet}
                          sizes="(max-width: 1000px) 100vw, 1000px"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-6c64196a"
                  data-id="6c64196a"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-473e467d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="473e467d"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div class="elementor-widget-container">
                        <ul class="elementor-icon-list-items">
                          <li class="elementor-icon-list-item">
                            <span class="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                class="far fa-dot-circle"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text">
                              How We Works
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-72b664bf elementor-widget elementor-widget-heading"
                      data-id="72b664bf"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">
                          4 Quick Steps To Use Our Services
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-68cf24bf elementor-widget elementor-widget-text-editor"
                      data-id="68cf24bf"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <p>
                          Using OGAPOS is simple and convenient. Follow these
                          four quick steps to start enjoying our services:
                        </p>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-408264e0 elementor-widget elementor-widget-jkit_feature_list"
                      data-id="408264e0"
                      data-element_type="widget"
                      data-widget_type="jkit_feature_list.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="jeg-elementor-kit jkit-feature-list icon-position-left icon-position-left icon-position-left jeg_module_546_18_66a669ed764a2">
                          <ul class="feature-list-items shape-rhombus shape-view-stacked connector-type-classic">
                            <li class="feature-list-item elementor-repeater-item-5a416f5">
                              <span class="connector"></span>
                              <div class="feature-list-icon-box">
                                <div class="feature-list-icon-inner">
                                  <span class="feature-list-icon"></span>
                                </div>
                              </div>
                              <div class="feature-list-content-box">
                                <h3 class="feature-list-title">
                                  Register/Visit any of our physical point
                                </h3>
                                <p class="feature-list-content">
                                  Sign up for an account on our platform with
                                  your basic details in the register/login place
                                  or visit any of our points
                                </p>
                              </div>
                            </li>
                            <li class="feature-list-item elementor-repeater-item-93e25d3">
                              <span class="connector"></span>
                              <div class="feature-list-icon-box">
                                <div class="feature-list-icon-inner">
                                  <span class="feature-list-icon"></span>
                                </div>
                              </div>
                              <div class="feature-list-content-box">
                                <h3 class="feature-list-title"> Transact</h3>
                                <p class="feature-list-content">
                                  Choose the service you need—get cash, send
                                  money, pay bills, or purchase airtime and data
                                </p>
                              </div>
                            </li>
                            <li class="feature-list-item elementor-repeater-item-e636c65">
                              <span class="connector"></span>
                              <div class="feature-list-icon-box">
                                <div class="feature-list-icon-inner">
                                  <span class="feature-list-icon"></span>
                                </div>
                              </div>
                              <div class="feature-list-content-box">
                                <h3 class="feature-list-title">Make Payment</h3>
                                <p class="feature-list-content">
                                  Pay for the service you need
                                </p>
                              </div>
                            </li>
                            <li class="feature-list-item elementor-repeater-item-cfca428">
                              <span class="connector"></span>
                              <div class="feature-list-icon-box">
                                <div class="feature-list-icon-inner">
                                  <span class="feature-list-icon"></span>
                                </div>
                              </div>
                              <div class="feature-list-content-box">
                                <h3 class="feature-list-title">Enjoy</h3>
                                <p class="feature-list-content">
                                  Experience the convenience and reliability of
                                  OGAPOS as we help you manage your finances
                                  effortlessly.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-1bad5b4c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="1bad5b4c"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div class="elementor-background-overlay"></div>
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-87bc7a9"
                  data-id="87bc7a9"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-1880cbf0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="1880cbf0"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-default">
                        <div
                          class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2deef5d6"
                          data-id="2deef5d6"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-2331b205 elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="2331b205"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div class="elementor-widget-container">
                                <ul class="elementor-icon-list-items">
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="far fa-dot-circle"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Success Story
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-70d40839 elementor-widget elementor-widget-heading"
                              data-id="70d40839"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <h2 class="elementor-heading-title elementor-size-default">
                                  We Have Completed Many Transactions
                                </h2>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-361cdd02 elementor-widget elementor-widget-text-editor"
                              data-id="361cdd02"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div class="elementor-widget-container">
                                At OGAPOS, we pride ourselves on the volume of
                                transactions successfully completed by our
                                platform. Our robust system has facilitated
                                countless transactions, helping customers access
                                cash, send money, pay bills, and purchase
                                airtime and data efficiently. Join our growing
                                community of satisfied users and experience the
                                reliability and convenience of our services.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-577b1324 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                      data-id="577b1324"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7cc777b5"
                          data-id="7cc777b5"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-background-overlay"></div>
                            <div
                              class="elementor-element elementor-element-359e9f19 elementor-widget elementor-widget-spacer"
                              data-id="359e9f19"
                              data-element_type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-spacer">
                                  <div class="elementor-spacer-inner"></div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-751f75c1 elementor-widget elementor-widget-jkit_heading"
                              data-id="751f75c1"
                              data-element_type="widget"
                              data-widget_type="jkit_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-heading  align-center align-tablet-center align-mobile-center jeg_module_546_19_66a669ed7a5cb">
                                  <div class="heading-section-title  display-inline-block">
                                    <h3 class="heading-title">
                                      Onsite Payments
                                    </h3>
                                  </div>
                                  <div class="heading-section-description">
                                    <p>Seamless API for CRM</p>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-391bc596"
                          data-id="391bc596"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-background-overlay"></div>
                            <div
                              class="elementor-element elementor-element-f8747a5 elementor-widget elementor-widget-spacer"
                              data-id="f8747a5"
                              data-element_type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-spacer">
                                  <div class="elementor-spacer-inner"></div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-21fc725c elementor-widget elementor-widget-jkit_heading"
                              data-id="21fc725c"
                              data-element_type="widget"
                              data-widget_type="jkit_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-heading  align-center align-tablet-center align-mobile-center jeg_module_546_20_66a669ed7bf9e">
                                  <div class="heading-section-title  display-inline-block">
                                    <h3 class="heading-title">Loan Finance</h3>
                                  </div>
                                  <div class="heading-section-description">
                                    <p>Industry Best Practice</p>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-513d16d7"
                          data-id="513d16d7"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-background-overlay"></div>
                            <div
                              class="elementor-element elementor-element-5ab386b6 elementor-widget elementor-widget-spacer"
                              data-id="5ab386b6"
                              data-element_type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-spacer">
                                  <div class="elementor-spacer-inner"></div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-7b782d19 elementor-widget elementor-widget-jkit_heading"
                              data-id="7b782d19"
                              data-element_type="widget"
                              data-widget_type="jkit_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-heading  align-center align-tablet-center align-mobile-center jeg_module_546_21_66a669ed7dae4">
                                  <div class="heading-section-title  display-inline-block">
                                    <h3 class="heading-title">Invoice Cloud</h3>
                                  </div>
                                  <div class="heading-section-description">
                                    <p>Cryptocurrencies</p>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1339271"
                          data-id="1339271"
                          data-element_type="column"
                          data-settings='{"background_background":"classic"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-background-overlay"></div>
                            <div
                              class="elementor-element elementor-element-2df0b0a elementor-widget elementor-widget-spacer"
                              data-id="2df0b0a"
                              data-element_type="widget"
                              data-widget_type="spacer.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-spacer">
                                  <div class="elementor-spacer-inner"></div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-1ade63b6 elementor-widget elementor-widget-jkit_heading"
                              data-id="1ade63b6"
                              data-element_type="widget"
                              data-widget_type="jkit_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-heading  align-center align-tablet-center align-mobile-center jeg_module_546_22_66a669ed7f58c">
                                  <div class="heading-section-title  display-inline-block">
                                    <h3 class="heading-title">Bank Transfer</h3>
                                  </div>
                                  <div class="heading-section-description">
                                    <p>Portal Payments</p>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-1860ac90 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="1860ac90"
              data-element_type="section"
            >
              {/*}  <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5a582952"
                  data-id="5a582952"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-59edff1e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="59edff1e"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div class="elementor-widget-container">
                        <ul class="elementor-icon-list-items">
                          <li class="elementor-icon-list-item">
                            <span class="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                class="far fa-dot-circle"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text">
                              Pricing & Plan
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-2939c135 elementor-widget elementor-widget-heading"
                      data-id="2939c135"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">
                          We Give The Best Price
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-3ad2fffe elementor-widget elementor-widget-text-editor"
                      data-id="3ad2fffe"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <p>
                          Lorem ipsum dolor sit amet, consectete adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua ullamco laboris nisi.
                        </p>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-7db0d275 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                      data-id="7db0d275"
                      data-element_type="widget"
                      data-widget_type="divider.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-divider">
                          <span class="elementor-divider-separator"></span>
                        </div>
                      </div>
                    </div>
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-1af6c068 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="1af6c068"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6a66b946"
                          data-id="6a66b946"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-4e91c6b0 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="4e91c6b0"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_23_66a669ed87a53">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-header elementor-animation-">
                                      <div class="icon style-color">
                                        <i
                                          aria-hidden="true"
                                          class="jki jki-Money-light"
                                        ></i>
                                      </div>
                                    </div>
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">100% Guarantee</h3>
                                      <p class="icon-box-description">
                                        Lorem ipsum dolor, consectetur
                                        adipiscing.
                                      </p>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6dff1213"
                          data-id="6dff1213"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-3addd7a7 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                              data-id="3addd7a7"
                              data-element_type="widget"
                              data-widget_type="jkit_icon_box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_546_24_66a669ed890cd">
                                  <div class="jkit-icon-box-wrapper hover-from-left">
                                    <div class="icon-box icon-box-header elementor-animation-">
                                      <div class="icon style-color">
                                        <i
                                          aria-hidden="true"
                                          class="jki jki-support1-light"
                                        ></i>
                                      </div>
                                    </div>
                                    <div class="icon-box icon-box-body">
                                      <h3 class="title">24/7 Support</h3>
                                      <p class="icon-box-description">
                                        Lorem ipsum dolor, consectetur
                                        adipiscing.
                                      </p>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div
                      class="elementor-element elementor-element-387fa2af elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button"
                      data-id="387fa2af"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="elementor-button-wrapper">
                          <a
                            class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                            href="#"
                          >
                            <span class="elementor-button-content-wrapper">
                              <span class="elementor-button-text">
                                View All Pricing
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2e4cdf99"
                  data-id="2e4cdf99"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-3a6fd401 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="3a6fd401"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3b391bd0"
                          data-id="3b391bd0"
                          data-element_type="column"
                          data-settings='{"background_background":"gradient"}'
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-6106e933 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="6106e933"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-diamond11-light"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-90975e5 elementor-widget elementor-widget-jkit_heading"
                              data-id="90975e5"
                              data-element_type="widget"
                              data-widget_type="jkit_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-heading  align-left align-tablet- align-mobile- jeg_module_546_25_66a669ed8c2ae">
                                  <div class="heading-section-title  display-inline-block">
                                    <h2 class="heading-title">Premium</h2>
                                  </div>
                                  <div class="heading-section-description">
                                    Lorem ipsum dolor sit amet, consecte
                                    adipiscing elit.
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-42121ffb elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="42121ffb"
                              data-element_type="widget"
                              data-widget_type="divider.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-divider">
                                  <span class="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-7ca06d93 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="7ca06d93"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div class="elementor-widget-container">
                                <ul class="elementor-icon-list-items">
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Professional Advice
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Auto Investing
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      {" "}
                                      No Account Limits
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      {" "}
                                      Cashback Guarantee
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      24/7 Customer Support
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-42ea9e16 elementor-widget elementor-widget-jkit_animated_text"
                              data-id="42ea9e16"
                              data-element_type="widget"
                              data-widget_type="jkit_animated_text.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  class="jeg-elementor-kit jkit-animated-text jeg_module_546_26_66a669ed8f754"
                                  data-style="none"
                                >
                                  <span class="animated-text">
                                    <span class="normal-text style-color">
                                      $149
                                    </span>
                                    <span class="dynamic-wrapper style-color">
                                      <span class="dynamic-text">/Years</span>
                                    </span>
                                    <span class="normal-text style-color"></span>
                                  </span>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-44611a80 elementor-align-justify elementor-widget__width-inherit elementor-widget elementor-widget-button"
                              data-id="44611a80"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-text">
                                        Purchase Now
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2b187482"
                          data-id="2b187482"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-49b2fc5 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="49b2fc5"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-wrapper">
                                  <div class="elementor-icon elementor-animation-float">
                                    <i
                                      aria-hidden="true"
                                      class="jki jki-users-line"
                                    ></i>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-2794dd35 elementor-widget elementor-widget-jkit_heading"
                              data-id="2794dd35"
                              data-element_type="widget"
                              data-widget_type="jkit_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="jeg-elementor-kit jkit-heading  align-left align-tablet- align-mobile- jeg_module_546_27_66a669ed91794">
                                  <div class="heading-section-title  display-inline-block">
                                    <h2 class="heading-title">Personal</h2>
                                  </div>
                                  <div class="heading-section-description">
                                    Lorem ipsum dolor sit amet, consecte
                                    adipiscing elit.
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-f329bb9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                              data-id="f329bb9"
                              data-element_type="widget"
                              data-widget_type="divider.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-divider">
                                  <span class="elementor-divider-separator"></span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-51cdb8da elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="51cdb8da"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div class="elementor-widget-container">
                                <ul class="elementor-icon-list-items">
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Basic Advice
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Auto Investing
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      {" "}
                                      No Account Limits
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      {" "}
                                      Cashback Guarantee
                                    </span>
                                  </li>
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="fas fa-check"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      24/7 Customer Support
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-2d1012ac elementor-widget elementor-widget-jkit_animated_text"
                              data-id="2d1012ac"
                              data-element_type="widget"
                              data-widget_type="jkit_animated_text.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  class="jeg-elementor-kit jkit-animated-text jeg_module_546_28_66a669ed92fc2"
                                  data-style="none"
                                >
                                  <span class="animated-text">
                                    <span class="normal-text style-color">
                                      $149
                                    </span>
                                    <span class="dynamic-wrapper style-color">
                                      <span class="dynamic-text">/Years</span>
                                    </span>
                                    <span class="normal-text style-color"></span>
                                  </span>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-1773f964 elementor-align-justify elementor-widget__width-inherit elementor-widget elementor-widget-button"
                              data-id="1773f964"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-text">
                                        Purchase Now
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>*/}
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-c0ca17f elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="c0ca17f"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e04f1f9"
                  data-id="e04f1f9"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-fd4769b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="fd4769b"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ed3c63e"
                          data-id="ed3c63e"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-cd9db3b elementor-widget elementor-widget-heading"
                              data-id="cd9db3b"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <h2 class="elementor-heading-title elementor-size-default">
                                  More Than 500 Companies Have Partnered With
                                  Payze
                                </h2>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4b9892d"
                          data-id="4b9892d"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-acd20c5 elementor-widget elementor-widget-jkit_client_logo"
                              data-id="acd20c5"
                              data-element_type="widget"
                              data-widget_type="jkit_client_logo.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  class="jeg-elementor-kit jkit-client-logo arrow-bottom-middle jeg_module_546_29_66a669ed9817f"
                                  data-id="jeg_module_546_29_66a669ed9817f"
                                  data-settings='{"autoplay":true,"autoplay_speed":3500,"autoplay_hover_pause":false,"show_navigation":false,"navigation_left":"&lt;span&gt;&lt;i aria-hidden=\"true\" class=\"fas fa-angle-left\"&gt;&lt;\/i&gt;&lt;\/span&gt;","navigation_right":"&lt;span&gt;&lt;i aria-hidden=\"true\" class=\"fas fa-angle-right\"&gt;&lt;\/i&gt;&lt;\/span&gt;","show_dots":false,"arrow_position":"bottom","responsive":{"desktop":{"items":3,"margin":80,"breakpoint":1025},"tablet":{"items":3,"margin":80,"breakpoint":768},"mobile":{"items":2,"margin":50,"breakpoint":0}}}'
                                >
                                  <div class="client-list">
                                    <div class="client-track">
                                      <div class="client-slider item ">
                                        <div class="image-list">
                                          <div class="content-image">
                                            <img
                                              loading="lazy"
                                              decoding="async"
                                              width="333"
                                              height="83"
                                              src="wp-content/uploads/sites/27/2022/06/partner-1-1.png"
                                              class="main-image"
                                              alt="Title"
                                              url="wp-content/uploads/sites/27/2022/06/partner-1-1.png"
                                              source="library"
                                              srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-1-1.png 333w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-1-1-300x75.png 300w"
                                              sizes="(max-width: 333px) 100vw, 333px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="client-slider item ">
                                        <div class="image-list">
                                          <div class="content-image">
                                            <img
                                              loading="lazy"
                                              decoding="async"
                                              width="336"
                                              height="81"
                                              src="wp-content/uploads/sites/27/2022/06/partner-2-1.png"
                                              class="main-image"
                                              alt="Title"
                                              url="wp-content/uploads/sites/27/2022/06/partner-2-1.png"
                                              source="library"
                                              srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-2-1.png 336w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-2-1-300x72.png 300w"
                                              sizes="(max-width: 336px) 100vw, 336px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="client-slider item ">
                                        <div class="image-list">
                                          <div class="content-image">
                                            <img
                                              loading="lazy"
                                              decoding="async"
                                              width="338"
                                              height="85"
                                              src="wp-content/uploads/sites/27/2022/06/partner-3-1.png"
                                              class="main-image"
                                              alt="Title"
                                              url="wp-content/uploads/sites/27/2022/06/partner-3-1.png"
                                              source="library"
                                              srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-3-1.png 338w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-3-1-300x75.png 300w"
                                              sizes="(max-width: 338px) 100vw, 338px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="client-slider item ">
                                        <div class="image-list">
                                          <div class="content-image">
                                            <img
                                              loading="lazy"
                                              decoding="async"
                                              width="334"
                                              height="81"
                                              src="wp-content/uploads/sites/27/2022/06/partner-4-1.png"
                                              class="main-image"
                                              alt="Title"
                                              url="wp-content/uploads/sites/27/2022/06/partner-4-1.png"
                                              source="library"
                                              srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-4-1.png 334w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/partner-4-1-300x73.png 300w"
                                              sizes="(max-width: 334px) 100vw, 334px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-a5307ae elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="a5307ae"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67f4208"
                  data-id="67f4208"
                  data-element_type="column"
                  data-settings='{"background_background":"classic"}'
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div class="elementor-background-overlay"></div>
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-dec0183 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="dec0183"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2774f93"
                          data-id="2774f93"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-63f0493 elementor-widget elementor-widget-jkit_testimonials"
                              data-id="63f0493"
                              data-element_type="widget"
                              data-widget_type="jkit_testimonials.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  class="jeg-elementor-kit jkit-testimonials arrow-bottom-middle style-2  jeg_module_546_30_66a669eda20c4"
                                  data-id="jeg_module_546_30_66a669eda20c4"
                                  data-settings='{"autoplay":true,"autoplay_speed":3500,"autoplay_hover_pause":false,"show_navigation":false,"navigation_left":"&lt;span&gt;&lt;i aria-hidden=\"true\" class=\"fas fa-angle-left\"&gt;&lt;\/i&gt;&lt;\/span&gt;","navigation_right":"&lt;span&gt;&lt;i aria-hidden=\"true\" class=\"fas fa-angle-right\"&gt;&lt;\/i&gt;&lt;\/span&gt;","show_dots":false,"arrow_position":"bottom","responsive":{"desktop":{"items":1,"margin":20,"breakpoint":1025},"tablet":{"items":1,"margin":10,"breakpoint":768},"mobile":{"items":1,"margin":10,"breakpoint":0}}}'
                                >
                                  <div class="testimonials-list">
                                    <div class="testimonials-track">
                                      <div class="testimonial-item  elementor-repeater-item-2196130">
                                        <div class="testimonial-box hover-from-left">
                                          <div class="comment-header">
                                            <ul class="rating-stars">
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="comment-bio">
                                            <div class="bio-details">
                                              <div class="profile-image">
                                                <img
                                                  loading="lazy"
                                                  decoding="async"
                                                  width="1000"
                                                  height="1000"
                                                  src="wp-content/uploads/sites/27/2022/06/man-with-tablet-in-his-hands-feeling-good-M5SC4SH-1.jpg"
                                                  class="source-library"
                                                  alt="Marius Huber"
                                                  url="wp-content/uploads/sites/27/2022/06/man-with-tablet-in-his-hands-feeling-good-M5SC4SH-1.jpg"
                                                  source="library"
                                                  srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/man-with-tablet-in-his-hands-feeling-good-M5SC4SH-1.jpg 1000w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/man-with-tablet-in-his-hands-feeling-good-M5SC4SH-1-300x300.jpg 300w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/man-with-tablet-in-his-hands-feeling-good-M5SC4SH-1-150x150.jpg 150w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/man-with-tablet-in-his-hands-feeling-good-M5SC4SH-1-768x768.jpg 768w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/man-with-tablet-in-his-hands-feeling-good-M5SC4SH-1-800x800.jpg 800w"
                                                  sizes="(max-width: 1000px) 100vw, 1000px"
                                                />
                                              </div>
                                              <span class="profile-info">
                                                <strong class="profile-name">
                                                  Marius Huber
                                                </strong>
                                                <p class="profile-des">
                                                  HR Manager
                                                </p>
                                              </span>
                                            </div>
                                            <div class="icon-content">
                                              <i
                                                aria-hidden="true"
                                                class="jki jki-quote-light"
                                              ></i>
                                            </div>
                                          </div>
                                          <div class="comment-content">
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua
                                              minim veniam quis nostrud exercis.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="testimonial-item  elementor-repeater-item-578b953">
                                        <div class="testimonial-box hover-from-left">
                                          <div class="comment-header">
                                            <ul class="rating-stars">
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="comment-bio">
                                            <div class="bio-details">
                                              <div class="profile-image">
                                                <img
                                                  loading="lazy"
                                                  decoding="async"
                                                  width="1000"
                                                  height="1000"
                                                  src="wp-content/uploads/sites/27/2022/06/young-woman-working-with-digital-tablet-in-the-off-7FHM3FZ-1.jpg"
                                                  class="source-library"
                                                  alt="Maeve Ritter"
                                                  url="wp-content/uploads/sites/27/2022/06/young-woman-working-with-digital-tablet-in-the-off-7FHM3FZ-1.jpg"
                                                  source="library"
                                                  srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-working-with-digital-tablet-in-the-off-7FHM3FZ-1.jpg 1000w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-working-with-digital-tablet-in-the-off-7FHM3FZ-1-300x300.jpg 300w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-working-with-digital-tablet-in-the-off-7FHM3FZ-1-150x150.jpg 150w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-working-with-digital-tablet-in-the-off-7FHM3FZ-1-768x768.jpg 768w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-working-with-digital-tablet-in-the-off-7FHM3FZ-1-800x800.jpg 800w"
                                                  sizes="(max-width: 1000px) 100vw, 1000px"
                                                />
                                              </div>
                                              <span class="profile-info">
                                                <strong class="profile-name">
                                                  Maeve Ritter
                                                </strong>
                                                <p class="profile-des">
                                                  Banker
                                                </p>
                                              </span>
                                            </div>
                                            <div class="icon-content">
                                              <i
                                                aria-hidden="true"
                                                class="jki jki-quote-light"
                                              ></i>
                                            </div>
                                          </div>
                                          <div class="comment-content">
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua
                                              minim veniam quis nostrud exercis.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="testimonial-item  elementor-repeater-item-f24d500">
                                        <div class="testimonial-box hover-from-left">
                                          <div class="comment-header">
                                            <ul class="rating-stars">
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="comment-bio">
                                            <div class="bio-details">
                                              <div class="profile-image">
                                                <img
                                                  loading="lazy"
                                                  decoding="async"
                                                  width="1000"
                                                  height="1000"
                                                  src="wp-content/uploads/sites/27/2022/06/young-woman-holding-digital-tablet-in-modern-offic-MDR8BDP-1.jpg"
                                                  class="source-library"
                                                  alt="Monica Doyle"
                                                  url="wp-content/uploads/sites/27/2022/06/young-woman-holding-digital-tablet-in-modern-offic-MDR8BDP-1.jpg"
                                                  source="library"
                                                  srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-holding-digital-tablet-in-modern-offic-MDR8BDP-1.jpg 1000w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-holding-digital-tablet-in-modern-offic-MDR8BDP-1-300x300.jpg 300w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-holding-digital-tablet-in-modern-offic-MDR8BDP-1-150x150.jpg 150w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-holding-digital-tablet-in-modern-offic-MDR8BDP-1-768x768.jpg 768w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-woman-holding-digital-tablet-in-modern-offic-MDR8BDP-1-800x800.jpg 800w"
                                                  sizes="(max-width: 1000px) 100vw, 1000px"
                                                />
                                              </div>
                                              <span class="profile-info">
                                                <strong class="profile-name">
                                                  Monica Doyle
                                                </strong>
                                                <p class="profile-des">
                                                  Entrepreneur
                                                </p>
                                              </span>
                                            </div>
                                            <div class="icon-content">
                                              <i
                                                aria-hidden="true"
                                                class="jki jki-quote-light"
                                              ></i>
                                            </div>
                                          </div>
                                          <div class="comment-content">
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua
                                              minim veniam quis nostrud exercis.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="testimonial-item  elementor-repeater-item-3b8a654">
                                        <div class="testimonial-box hover-from-left">
                                          <div class="comment-header">
                                            <ul class="rating-stars">
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                              <li>
                                                <i
                                                  aria-hidden="true"
                                                  class="fas fa-star"
                                                ></i>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="comment-bio">
                                            <div class="bio-details">
                                              <div class="profile-image">
                                                <img
                                                  loading="lazy"
                                                  decoding="async"
                                                  width="1000"
                                                  height="1000"
                                                  src="wp-content/uploads/sites/27/2022/06/young-creative-man-standing-in-modern-office-and-s-PBU4KMW-1.jpg"
                                                  class="source-library"
                                                  alt="John Helzinky"
                                                  url="wp-content/uploads/sites/27/2022/06/young-creative-man-standing-in-modern-office-and-s-PBU4KMW-1.jpg"
                                                  source="library"
                                                  srcset="https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-creative-man-standing-in-modern-office-and-s-PBU4KMW-1.jpg 1000w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-creative-man-standing-in-modern-office-and-s-PBU4KMW-1-300x300.jpg 300w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-creative-man-standing-in-modern-office-and-s-PBU4KMW-1-150x150.jpg 150w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-creative-man-standing-in-modern-office-and-s-PBU4KMW-1-768x768.jpg 768w, https://kit.baliniz.com/payze/wp-content/uploads/sites/27/2022/06/young-creative-man-standing-in-modern-office-and-s-PBU4KMW-1-800x800.jpg 800w"
                                                  sizes="(max-width: 1000px) 100vw, 1000px"
                                                />
                                              </div>
                                              <span class="profile-info">
                                                <strong class="profile-name">
                                                  John Helzinky
                                                </strong>
                                                <p class="profile-des">
                                                  CEO Scraft
                                                </p>
                                              </span>
                                            </div>
                                            <div class="icon-content">
                                              <i
                                                aria-hidden="true"
                                                class="jki jki-quote-light"
                                              ></i>
                                            </div>
                                          </div>
                                          <div class="comment-content">
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua
                                              minim veniam quis nostrud exercis.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4dbc461"
                          data-id="4dbc461"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-646a149 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                              data-id="646a149"
                              data-element_type="widget"
                              data-widget_type="icon-list.default"
                            >
                              <div class="elementor-widget-container">
                                <ul class="elementor-icon-list-items">
                                  <li class="elementor-icon-list-item">
                                    <span class="elementor-icon-list-icon">
                                      <i
                                        aria-hidden="true"
                                        class="far fa-dot-circle"
                                      ></i>{" "}
                                    </span>
                                    <span class="elementor-icon-list-text">
                                      Testimonial
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-b99cc12 elementor-widget elementor-widget-heading"
                              data-id="b99cc12"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div class="elementor-widget-container">
                                <h2 class="elementor-heading-title elementor-size-default">
                                  What Our Clients Said
                                </h2>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-aadff0e elementor-widget elementor-widget-text-editor"
                              data-id="aadff0e"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div class="elementor-widget-container">
                                <p>
                                  Lorem ipsum dolor sit amet, consectete
                                  adipiscing elit, sed dolore eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ullamco laboris nisi eiusmod tempor
                                  incididunt.
                                </p>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-ef48dbf elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button"
                              data-id="ef48dbf"
                              data-element_type="widget"
                              data-widget_type="button.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-button-wrapper">
                                  <a
                                    class="elementor-button elementor-button-link elementor-size-sm elementor-animation-shrink"
                                    href="#"
                                  >
                                    <span class="elementor-button-content-wrapper">
                                      <span class="elementor-button-text">
                                        More Testimonial
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            {/*} <section
              class="elementor-section elementor-top-section elementor-element elementor-element-5af00faf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="5af00faf"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <div class="elementor-container elementor-column-gap-default">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1529dbac"
                  data-id="1529dbac"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-31bbe2ad elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-id="31bbe2ad"
                      data-element_type="widget"
                      data-widget_type="icon-list.default"
                    >
                      <div class="elementor-widget-container">
                        <ul class="elementor-icon-list-items">
                          <li class="elementor-icon-list-item">
                            <span class="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                class="far fa-dot-circle"
                              ></i>{" "}
                            </span>
                            <span class="elementor-icon-list-text">
                              Our Blog
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-4f3aeded elementor-widget elementor-widget-heading"
                      data-id="4f3aeded"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">
                          Latest Blog & Articles
                        </h2>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-7727a0f3 elementor-widget elementor-widget-text-editor"
                      data-id="7727a0f3"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div class="elementor-widget-container">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>{" "}
                      </div>
                    </div>
                    <div
                      class="elementor-element elementor-element-7716004c elementor-widget elementor-widget-jkit_post_block"
                      data-id="7716004c"
                      data-element_type="widget"
                      data-widget_type="jkit_post_block.default"
                    >
                      <div class="elementor-widget-container">
                        <div
                          class="jeg-elementor-kit jkit-postblock postblock-type-3 jkit-pagination-disable post-element jeg_module_546_31_66a669edb0a4e"
                          data-id="jeg_module_546_31_66a669edb0a4e"
                          data-settings='{"post_type":"post","number_post":{"unit":"px","size":3,"sizes":[]},"post_offset":0,"unique_content":"disable","include_post":"","exclude_post":"","include_category":"","exclude_category":"","include_author":"","include_tag":"","exclude_tag":"","sort_by":"latest","pagination_mode":"disable","pagination_loadmore_text":"Load More","pagination_loading_text":"Loading...","pagination_number_post":{"unit":"px","size":3,"sizes":[]},"pagination_scroll_limit":0,"pagination_icon":{"value":"","library":""},"pagination_icon_position":"before","st_category_position":"","sg_content_postblock_type":"type-3","sg_content_element_order":"title,meta,excerpt,read","sg_content_breakpoint":"tablet","sg_content_title_html_tag":"h4","sg_content_category_enable":"yes","sg_content_excerpt_enable":"yes","sg_content_excerpt_length":{"unit":"px","size":19,"sizes":[]},"sg_content_excerpt_more":"...","sg_content_readmore_enable":"yes","sg_content_readmore_icon":{"value":"fas fa-long-arrow-alt-right","library":"fa-solid"},"sg_content_readmore_icon_position":"after","sg_content_readmore_text":"Read More","sg_content_comment_enable":"","sg_content_comment_icon":{"value":"fas fa-comment","library":"fa-solid"},"sg_content_comment_icon_position":"before","sg_content_meta_enable":"","sg_content_meta_author_enable":"","sg_content_meta_author_by_text":"by","sg_content_meta_author_icon":{"value":"fas fa-user","library":"fa-solid"},"sg_content_meta_author_icon_position":"before","sg_content_meta_date_enable":"","sg_content_meta_date_type":"published","sg_content_meta_date_format":"default","sg_content_meta_date_format_custom":"F j, Y","sg_content_meta_date_icon":{"value":"fas fa-clock","library":"fa-solid"},"sg_content_meta_date_icon_position":"before","sg_content_image_size_imagesize_size":"full","paged":1,"class":"jkit_post_block"}'
                        >
                          <div class="jkit-block-container">
                            <div class="jkit-posts jkit-ajax-flag">
                              <article class="jkit-post post-501 post type-post status-publish format-standard has-post-thumbnail hentry category-bank tag-bank">
                                <div class="jkit-thumb">
                                  <a
                                    aria-label="The Impact Of Online Payments Will Make All Banks Use ATMs"
                                    href="2022/06/09/the-impact-of-online-payments-will-make-all-banks-use-atms/index.html"
                                  >
                                    <div class="thumbnail-container ">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1440"
                                        height="960"
                                        src="wp-content/uploads/sites/27/2022/06/young-woman-withdrawing-money-from-credit-card-at-atm-e1655014574794.jpg"
                                        class="attachment-full size-full wp-post-image"
                                        alt="Young woman withdrawing money from credit card at ATM"
                                      />
                                    </div>
                                  </a>
                                  <div class="jkit-post-category position-">
                                    <span>
                                      <a
                                        href="category/bank/index.html"
                                        class="category-bank"
                                      >
                                        Bank
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div class="jkit-postblock-content">
                                  <h4 class="jkit-post-title">
                                    <a href="2022/06/09/the-impact-of-online-payments-will-make-all-banks-use-atms/index.html">
                                      The Impact Of Online Payments Will Make
                                      All Banks Use ATMs
                                    </a>
                                  </h4>
                                  <div class="jkit-post-excerpt">
                                    <p>
                                      Lorem ipsum dolor sit amet conset atetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna...
                                    </p>
                                  </div>
                                  <div class="jkit-post-meta-bottom">
                                    <div class="jkit-meta-readmore icon-position-after">
                                      <a
                                        title="The Impact Of Online Payments Will Make All Banks Use ATMs"
                                        href="2022/06/09/the-impact-of-online-payments-will-make-all-banks-use-atms/index.html"
                                        class="jkit-readmore"
                                      >
                                        Read More
                                        <i
                                          aria-hidden="true"
                                          class="fas fa-long-arrow-alt-right"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article class="jkit-post post-502 post type-post status-publish format-standard has-post-thumbnail hentry category-inflation tag-inflation">
                                <div class="jkit-thumb">
                                  <a
                                    aria-label="Is Now A Good Time To Worry More About Financial Inflation"
                                    href="2022/06/09/is-now-a-good-time-to-worry-more-about-financial-inflation/index.html"
                                  >
                                    <div class="thumbnail-container ">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1440"
                                        height="961"
                                        src="wp-content/uploads/sites/27/2022/06/money-concept-e1655014566978.jpg"
                                        class="attachment-full size-full wp-post-image"
                                        alt="Money concept"
                                      />
                                    </div>
                                  </a>
                                  <div class="jkit-post-category position-">
                                    <span>
                                      <a
                                        href="category/inflation/index.html"
                                        class="category-inflation"
                                      >
                                        Inflation
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div class="jkit-postblock-content">
                                  <h4 class="jkit-post-title">
                                    <a href="2022/06/09/is-now-a-good-time-to-worry-more-about-financial-inflation/index.html">
                                      Is Now A Good Time To Worry More About
                                      Financial Inflation
                                    </a>
                                  </h4>
                                  <div class="jkit-post-excerpt">
                                    <p>
                                      Lorem ipsum dolor sit amet conset atetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna...
                                    </p>
                                  </div>
                                  <div class="jkit-post-meta-bottom">
                                    <div class="jkit-meta-readmore icon-position-after">
                                      <a
                                        title="Is Now A Good Time To Worry More About Financial Inflation"
                                        href="2022/06/09/is-now-a-good-time-to-worry-more-about-financial-inflation/index.html"
                                        class="jkit-readmore"
                                      >
                                        Read More
                                        <i
                                          aria-hidden="true"
                                          class="fas fa-long-arrow-alt-right"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </article>
                              <article class="jkit-post post-503 post type-post status-publish format-standard has-post-thumbnail hentry category-economy tag-economy">
                                <div class="jkit-thumb">
                                  <a
                                    aria-label="New SaaS Online Payment Platform Raises $15 Million Per Year"
                                    href="2022/06/09/new-saas-online-payment-platform-raises-15-million-per-year/index.html"
                                  >
                                    <div class="thumbnail-container ">
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width="1440"
                                        height="960"
                                        src="wp-content/uploads/sites/27/2022/06/payments-are-easy--e1655014546397.jpg"
                                        class="attachment-full size-full wp-post-image"
                                        alt="Payments are easy."
                                      />
                                    </div>
                                  </a>
                                  <div class="jkit-post-category position-">
                                    <span>
                                      <a
                                        href="category/economy/index.html"
                                        class="category-economy"
                                      >
                                        Economy
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div class="jkit-postblock-content">
                                  <h4 class="jkit-post-title">
                                    <a href="2022/06/09/new-saas-online-payment-platform-raises-15-million-per-year/index.html">
                                      New SaaS Online Payment Platform Raises
                                      $15 Million Per Year
                                    </a>
                                  </h4>
                                  <div class="jkit-post-excerpt">
                                    <p>
                                      Lorem ipsum dolor sit amet conset atetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna...
                                    </p>
                                  </div>
                                  <div class="jkit-post-meta-bottom">
                                    <div class="jkit-meta-readmore icon-position-after">
                                      <a
                                        title="New SaaS Online Payment Platform Raises $15 Million Per Year"
                                        href="2022/06/09/new-saas-online-payment-platform-raises-15-million-per-year/index.html"
                                        class="jkit-readmore"
                                      >
                                        Read More
                                        <i
                                          aria-hidden="true"
                                          class="fas fa-long-arrow-alt-right"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>*/}
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default Home;
