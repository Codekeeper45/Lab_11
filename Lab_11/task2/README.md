# Lab 11.2 - Task 2

Name: Яппаров Эмир
Student ID: not provided
Date: 2026-03-28

## Done
- Product list screen using FlatList with keyExtractor
- Product detail screen
- Navigation between screens via React Navigation Native Stack
- App.tsx with NavigationContainer and Stack.Navigator
- Platform-specific code via Platform.select in detail screen button shadow/elevation

## Navigation setup
Installed packages:
- @react-navigation/native
- @react-navigation/native-stack
- react-native-screens
- react-native-safe-area-context

App flow:
- ProductList is initial route
- Pressing product card navigates to ProductDetail with selected product in params
- ProductDetail title comes from route params (product name)

## How to run
1. npm install
2. npm run start
