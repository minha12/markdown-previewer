import React from 'react';
import { marked } from 'marked';
import './App.scss';

marked.setOptions({
  breaks: true,
});

function Preview(props) {
  return (
    <div id="preview" className="preview" dangerouslySetInnerHTML={{__html : marked(props.inputText, {sanitize: true})}}/>
  );
}

function Editor({inputText, changeInputText}) {
  return (
    <div className='editor'>
      <textarea id='editor' value={inputText} onChange={event => changeInputText(event.target.value)}>
      </textarea>  
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: initialText};
  }
  
  render() {
    return (
      <div className="container">
        <Editor
          changeInputText={newText => this.setState({inputText: newText})}
          inputText={this.state.inputText}/>
        <Preview inputText={this.state.inputText}/>
      </div>  
    );
  }
}

const initialText = 
`# A header (H1 size)

## A sub header (H2 size)


### Another deeper heading

There's [links](https://www.freecodecamp.com), and
> Block Quotes!

Press enter at the end of a line to do a line break  

Text attributes *italic*, **bold**, \"nmonospace", ~~strikethrough~~ .

Here is inline code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Shopping list:
* apples  
* oranges  
* pears

Numbered list:
1. apples
2. oranges
3. pears

Image as a markdown Icon:

![Markdown Icon](https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/205_Markdown_logo_logos-128.png)`;

export default App;
