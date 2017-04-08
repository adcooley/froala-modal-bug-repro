# froala-modal-bug-repro

A repo that reproduces the following bug:

When rendering the Froala editor inside a Bootstrap modal, click handling events are ignored inside the text editor.

## Setup

Clone with `git clone git@github.com:adcooley/froala-modal-bug-repro.git`
`cd froala-modal-bug-repro`
run `meteor npm install` to get babel-runtime
run `meteor` to build and run the app

## Repro

- Create a link in the editor and see that you can click on it to edit.
- Click the button to open the modal, then create a link and notice that you cannot edit by clicking on the link.
