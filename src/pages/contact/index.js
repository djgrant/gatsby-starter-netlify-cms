import React from 'react';
import { navigate } from 'gatsby-link';
import Box from '../../components/atoms/box';
import Jumbotron from '../../components/molecules/jumbotron';
import Layout from '../../components/organisms/layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Jumbotron>
          <h1>Contact</h1>
        </Jumbotron>
        <Box container gutter pt={[3, 4]}>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <Box>
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
            </Box>

            <Box>
              <label htmlFor={'name'}>Your name</label>
              <input
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
              />
            </Box>

            <Box>
              <label htmlFor={'email'}>Email</label>
              <input
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={true}
              />
            </Box>

            <Box>
              <label htmlFor={'message'}>Message</label>
              <textarea
                name={'message'}
                onChange={this.handleChange}
                id={'message'}
                required={true}
              />
            </Box>

            <button type="submit">Send</button>
          </form>
        </Box>
      </Layout>
    );
  }
}
