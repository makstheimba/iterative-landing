# Common components

All components should be built to be able to be properly displayed on various resolutions

## Iterative logo

[Figma](https://www.figma.com/file/m3nYO4Yg9kLTGWvzoHrPKY/Iterative.ai?node-id=30%3A3084)

```javascript
IterativeLogo.propTypes = {
  link: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm']).isRequired, // it should be able to be displayed in various sizes (for the footer and the header)
};
```

## Icon

Common icon component for the page

```javascript
Icon.propTypes = {
    icon: PropTypes.any.isRequired, // find a way to display various icons
    link: PropTypes.string // if link is provided then Icon should be clickable,
    size: PropTypes.oneOf(['s', 'm', 'l']) // this size should determine both icon and text size
    description: PropTypes.string // if provided then description should be displayed alongside the icon
    descriptionPosition: PropTypes.oneOf(['bottom', 'right']) // positioning of description
}
```

## Title

[Figma](https://www.figma.com/file/m3nYO4Yg9kLTGWvzoHrPKY/Iterative.ai?node-id=30%3A3084)

Text with shading applied.

```javascript
Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};
```

## Button

[Figma](https://www.figma.com/file/m3nYO4Yg9kLTGWvzoHrPKY/Iterative.ai?node-id=30%3A3084)

Button with gradient background. Note that it should be stretched on smaller screens

```javascript
    Button.propTypes = {
        type: PropTypes.oneOf([]) // we have two types of buttons with varying gradients
        onClick: PropTypes.func.isRequired
    }
```

## Header

[Figma](https://www.figma.com/file/m3nYO4Yg9kLTGWvzoHrPKY/Iterative.ai?node-id=30%3A3084)

Use Icon and Iterative logo components to build it.
Note that it looks differently on various screen sizes

## Footer and FooterList

[Figma](https://www.figma.com/file/m3nYO4Yg9kLTGWvzoHrPKY/Iterative.ai?node-id=44%3A845)

FooterList component should display one column of links in footer

```javascript
FooterList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
```

Footer component should display the footer itself.

## Layout

This component should wrap each page and set appropriate background, common font-size, font-color, etc.

```javascript
Layout.propTypes = {
  child: PropTypes.node.isRequired,
};
```

## Cookies

[Figma](https://www.figma.com/file/m3nYO4Yg9kLTGWvzoHrPKY/Iterative.ai?node-id=873%3A5742)
New users should be notified about usage of cookies on the website.
If user accepts cookies his decision should be saved to the localStorage so information about cookies does not appear again later
