'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Form from 'mdl-form';

import Input from 'mdl-form-input';
import Radio from 'mdl-form-radio';
import Textarea from 'mdl-form-textarea';
import File from 'mdl-form-file';

import RadioStyle from './../node_modules/mdl-form-radio/lib/style';
import TextareaStyle from './../node_modules/mdl-form-textarea/lib/style';
import FileStyle from './../node_modules/mdl-form-File/lib/style';

(() => {
  let Tags = { file: File, textarea: Textarea, radio: Radio, default: Input };
  let Data = {
    'title': {
      'label': 'Form Title'
    },  
    'submit': {
      'label': 'Submit',
      'url': '/test',
      'success': (data) => {
        console.log(data);
      },  
      'fail': (data) => {
        alert('You post:' + JSON.stringify(data));
      }   
    },  
    'form': [
      {   
        'id': 'input',
        'label': 'Input`s title',
        'style': { 'color': 'blue' },
        'error': 'Error, you need to input letter.',
        'regular_expression': '[A-Za-z]+',
        'max': '10',
        'isNotRequire': true,
        'default': 'default',
        'type': 'text',
        'change': (data) => {
          if(data.length == 10) {
            alert('10 letter is max.');
          }
        }
      },
      {
        'tag': 'radio',
        'id': 'radio',
        'isNotRequire': true,
        'item': [
          {
            'style': { 'color': 'green', 'margin': '20px' },
            'label': 'radio-1',
            'value': '1'
          },
          {
            'style': { 'color': 'blue', 'margin': '20px' },
            'label': 'radio-2',
            'value': '2',
            'isChecked': true
          }
        ],
        'change': (data) => {
          alert('You click: radio-' + data);
        }
      },
      {
        'tag': 'textarea',
        'id': 'textarea',
        'label': 'Textarea`s title',
        'style': { 'color': 'rgb(255,64,129)' },
        'isNotRequire': true,
        'rows': '10'
      },
      {
        'tag': 'file',
        'id': 'File',
        'label': 'File`s title',
        'style': { 'width': 'inherit', 'height': '100%' },
        'isNotRequire': true,
        'isMultiple': true
      }
    ]
  };

  ReactDOM.render(
    <Form
      data={Data}
      tags={Tags}
    />,
    document.getElementById('mdl-form')
  );
})();
