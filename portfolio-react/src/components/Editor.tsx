import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Code from '@editorjs/code';
import '../styles/editor.css';

interface EditorProps {
  onSave?: (data: any) => void;
  initialData?: any;
  readOnly?: boolean;
}

const Editor: React.FC<EditorProps> = ({ onSave, initialData, readOnly = false }) => {
  const editorRef = useRef<EditorJS | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup before initializing new editor
    if (editorRef.current && editorRef.current.destroy) {
      editorRef.current.destroy();
      editorRef.current = null;
    }

    const initEditor = async () => {
      const editor = new EditorJS({
        holder: containerRef.current!,
        readOnly: readOnly,
        tools: {
          header: Header,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: Code,
        },
        data: initialData || {
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: 'Start typing your content here...',
              },
            },
          ],
        },
        onChange: async () => {
          if (onSave && !readOnly) {
            const savedData = await editor.save();
            onSave(savedData);
          }
        },
      });

      editorRef.current = editor;
    };

    initEditor();

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [initialData, onSave, readOnly]);

  return <div ref={containerRef} className="ce-container" />;
};

export default Editor;
