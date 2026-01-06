import React from 'react';
import Button from './button';

type DataItem = { title: string, paragraph: any }

interface Props {
  data: DataItem[]
  className: string
  notOpenedByDefault?: boolean
}

const Accordion = (props: Props) => {
  return (
    <div {...{ className: `wrapper ${props.className}` }}>
      <ul {...{ className: 'accordion-list' }}>
        {props.data.map((data, key) => {
          return (
            <li key={key} {...{ className: 'accordion-list__item', key }}>
              <AccordionItem {...data} defaultOpened={key === 0} notOpenedByDefault={props.notOpenedByDefault} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const AccordionItem = (props: DataItem & { defaultOpened?: boolean, notOpenedByDefault?: boolean }) => {
  const [state, setState] = React.useState({
    opened: props.defaultOpened && !props.notOpenedByDefault
  });
  
  const {
    paragraph,
    title
  } = props;

  const { opened } = state;
  return (
    <div
      {...{
        className: `accordion-item montserrat ${opened && 'accordion-item--opened'}`,
        onClick: () => { setState({ opened: !opened }); }
      }}
    >
      <div {...{ className: 'accordion-item__line' }}>
        <h4 {...{ className: 'accordion-item__title' }}>
          {title}
        </h4>
        <span {...{ className: 'accordion-item__icon' }}/>
      </div>
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }}>
            <div>{/*{...{ className: 'accordion-item__paragraph' }}*/}
              {
                (
                  (paragraph) => {
                    if (typeof paragraph === 'string') {
                      return <div dangerouslySetInnerHTML={{
                              __html: paragraph?.toString()
                            }}/>
                    } else {
                      let item = paragraph
                      return item.map((item) => {
                        switch (item.type) {
                          case 'text': 
                            return <p key={'suplly_section_item'}>{item.content}</p>
                          case 'list':
                            const temp = [...(item.content as string[])]
                            const a = temp
                            const b = a.splice(0, 9)
                            return (
                              <div key={'suplly_section_item'} className="columns">
                                <div className="column">
                                  <ul>
                                    {
                                      b.map(
                                        (i, idx) => (
                                          <li key={idx + 'suplly_section_item_list_item'}>
                                            <p>{i}</p>
                                          </li>
                                        )
                                      )
                                    }
                                  </ul>
                                </div>
                                <div className="column">
                                  <ul>
                                    {
                                      a.map(
                                        (i, idx) => (
                                          <li key={idx + 'suplly_section_item_list_item'}>
                                            <p>{i}</p>
                                          </li>
                                        )
                                      )
                                    }
                                  </ul>
                                </div>
                              </div>
                            )
                          case 'link': 
                            return <Button light title={item.content as string} action={item.action} />
                        }
                      })
                    }
                  }
                )(paragraph)
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Accordion;