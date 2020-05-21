# react-native-user-avatar

An user avatar component for react-native.

This component display an avatar image and if none is provided fallback to the
user initials.

Rules used to compute user initials:

- divide the username on space and hyphen
- use the first letter of each parts
- never use more than three letters as initials
- if the username is divided in more than three parts and has part
  starting with an uppercase, skip parts starting with a lowercase.

## Installation

`yarn add @muhsin/react-native-user-avatar`
