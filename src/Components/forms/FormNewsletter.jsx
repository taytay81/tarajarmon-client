import React, { Component } from "react";
import PropTypes from "prop-types";
import validator from "validator";
import { Form, Input, Button } from "antd";
import Icon from "@ant-design/icons";
import "../../Styles/FormNewsletter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class FormNewsletter extends Component {
  render() {
    return (
      <Form layout="inline" className="newsletter-form" method="POST">
        <div className="newsletter-icon-close">
          <Link to={`/Home`}>
            <FontAwesomeIcon color="grey" size="lg" icon={faTimes} />
          </Link>
        </div>
        <div className="newsletter-titre">
          <h4>NEWSLETTER</h4>
        </div>
        <div className="newsletter-icon-envelope">
          <FontAwesomeIcon color="grey" size="lg" icon={faEnvelope} />
        </div>
        {!this.props.showmessage && (
          <div>
            <div className="newsletter-txt">
              Inscrivez-vous pour etre informes des promotions et de l'arrivee
              des nouvelles collections !
            </div>
            <div className="newsletter-prenom">
              <Form.Item>
                <Input
                  prefix={<Icon type="red-envelope" />}
                  placeholder="Prenom"
                  value={this.props.prenom}
                  onChange={({ target }) =>
                    this.props.handleOnChangePrenom(target.value)
                  }
                />
              </Form.Item>
            </div>
            <div className="newsletter-email">
              <Form.Item>
                <Input
                  prefix={<Icon type="red-envelope" />}
                  placeholder="Email"
                  value={this.props.email}
                  onChange={({ target }) =>
                    this.props.handleOnChangeEmail(target.value)
                  }
                />
              </Form.Item>
            </div>
            <div className="newsletter-button">
              <Form.Item>
                <Button
                  onClick={() =>
                    this.props.handleSendEmail(
                      this.props.email,
                      this.props.prenom
                    )
                  }
                  disabled={!validator.isEmail(this.props.email)}
                  type="primary"
                  htmlType="submit"
                >
                  Inscrivez Moi
                </Button>
              </Form.Item>
            </div>
          </div>
        )}
        {this.props.showmessage && (
          <div>
            <div className="newsletter-message">
              Merci de vous etres inscrit , a bientot
            </div>
            <div className="newsletter-submessage">
              Pour plus d'informations sur la manière dont vos données
              personnelles sont traitées, consultez
              <Link to="">notre politique de confidentialité</Link>
              et nos
              <Link to="">conditions générales de vente</Link>
            </div>
          </div>
        )}
      </Form>
    );
  }
}

FormNewsletter.propTypes = {
  email: PropTypes.string.isRequired,
  handleSendEmail: PropTypes.func.isRequired,
  handleOnChangeEmail: PropTypes.func.isRequired,
  handleOnChangePrenom: PropTypes.func.isRequired,
};
