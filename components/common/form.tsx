import React, { useRef, useState } from 'react'
import classNames from 'classnames';
import { format } from 'path';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// const mailchimp = require('@mailchimp/mailchimp_marketing');

// mailchimp.setConfig({
//   apiKey: 'YOUR_API_KEY',
//   server: 'YOUR_SERVER_PREFIX',
// });

// <MailchimpSubscribe
// url={url}
// render={({ subscribe, status, message }) => (
//   <div>
//     <CustomForm onSubmitted={formData => subscribe(formData)} />
//     {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//     {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//     {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//   </div>
// )}
// />

export type FormItem = {
  type: string,
  name: string,
  placeholder: string
  hidden?: boolean
  validate?: (string) => boolean
}

interface Props {
  items: FormItem[]
  url: string;
  action: string
  onSubmit?: (any) => void
  disclamer: string
  className?: string
  novalidate?: boolean
  invalid?: boolean
}

export default function Form(props: Props) {
  const [state, setState] = useState<any>({});
  const [notCompliant, setNotCompliant] = useState(false);
  console.log(props.url);
  return (
    <div
      className={
        classNames({
          "form": true,
          [props.className]: props.className
        })
      }
    >
      <MailchimpSubscribe
        url={props.url}
        render={(hooks) => (
          <>
            {
              props.items.map((item, idx, array) => {
                return (
                  <React.Fragment>
                    <div key={idx + '_form_control'} className="control" hidden={item.hidden}>
                      <input onChange={(e) => {
                        setNotCompliant(!(item.validate && item.validate(e.target.value)))
                        setState({ ...state, [item.name]: e.target.value })
                      }} className="input" type={item.type} placeholder={item.placeholder} />
                      {
                        array.length === idx + 1 && (
                          <React.Fragment>
                            <p className="help">{props.disclamer}</p>
                          </React.Fragment>
                        )
                      }
                    </div>
                  </React.Fragment>
                )
              })
            }
            <div className="control">
              <button className="button is-primary is-submit" disabled={props.invalid || !notCompliant} onClick={props.onSubmit && ((e) => { 
                e.preventDefault()
                hooks.subscribe(state)
                props.onSubmit(state)
              })}>{props.action}</button>
            </div>
          </>
        )}
      />
    </div>
  )
}
