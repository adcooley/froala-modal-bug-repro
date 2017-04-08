import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onRendered(function() {
  const toolbarButtons = ['bold', 'italic', 'underline', 'clearFormatting', '|', 'formatOL', 'formatUL', '|', 'insertLink']
  $('#nonModalEditor').froalaEditor({
    enter: $.FroalaEditor.ENTER_BR,
    toolbarButtons,
    toolbarButtonsMD: toolbarButtons,
    toolbarButtonsSM: toolbarButtons,
    toolbarButtonsXS: toolbarButtons,
    linkText: true,
    quickInsertTags: [],
    linkEditButtons: [ 'linkOpen', 'linkEdit', 'linkRemove' ],
    height: 300
  });
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Modal.show('testmodal');
  },
});

Template.testmodal.onRendered(function() {
  const toolbarButtons = ['bold', 'italic', 'underline', 'clearFormatting', '|', 'formatOL', 'formatUL', '|', 'insertLink']
  $('#editor').froalaEditor({
    enter: $.FroalaEditor.ENTER_BR,
    toolbarButtons,
    toolbarButtonsMD: toolbarButtons,
    toolbarButtonsSM: toolbarButtons,
    toolbarButtonsXS: toolbarButtons,
    linkText: true,
    quickInsertTags: [],
    linkEditButtons: [ 'linkOpen', 'linkEdit', 'linkRemove' ],
    height: 300
  });
});
