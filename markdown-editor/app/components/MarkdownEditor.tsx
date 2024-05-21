// components/MarkdownEditor.js
// Importa ReactMarkdown
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false
});

const MarkdownEditor = ({ content, setContent }) => {
  return (
    <MdEditor
      value={content}
      style={{ height: "500px" }}
      renderHTML={text => <ReactMarkdown>{text}</ReactMarkdown>}
      onChange={({ text }) => setContent(text)}
    />
  );
};

export default MarkdownEditor;
