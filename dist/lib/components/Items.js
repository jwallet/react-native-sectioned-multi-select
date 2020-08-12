var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.SubItemSeparator=exports.ItemSeparator=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _useSMSContext4=_interopRequireDefault(require("../context/useSMSContext"));var _this=this,_jsxFileName="/Users/renrizzolo/Documents/websites/react-native-sectioned-multi-select/lib/components/Items.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ItemSeparator=function ItemSeparator(_ref){var children=_ref.children,_ref$styles=_ref.styles,stylesFromProps=_ref$styles===void 0?{}:_ref$styles,rest=(0,_objectWithoutProperties2.default)(_ref,["children","styles"]);var _useSMSContext=(0,_useSMSContext4.default)(),styles=_useSMSContext.styles,getStyles=_useSMSContext.getStyles;var separatorStyles=React.useMemo(function(){return getStyles('separator',{},stylesFromProps);},[styles.separator,stylesFromProps.separator]);return React.useMemo(function(){console.log('ItemSep render');return React.createElement(_reactNative.View,(0,_extends2.default)({style:separatorStyles},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:7}}),children&&children);},[children,separatorStyles]);};exports.ItemSeparator=ItemSeparator;var SubItemSeparator=function SubItemSeparator(_ref2){var children=_ref2.children,_ref2$styles=_ref2.styles,stylesFromProps=_ref2$styles===void 0?{}:_ref2$styles,rest=(0,_objectWithoutProperties2.default)(_ref2,["children","styles"]);var _useSMSContext2=(0,_useSMSContext4.default)(),styles=_useSMSContext2.styles,getStyles=_useSMSContext2.getStyles;var subSeparatorStyles=React.useMemo(function(){return getStyles('subSeparator',{},stylesFromProps);},[styles.subSeparator,stylesFromProps.subSeparator]);return React.useMemo(function(){console.log('SubItemSep render');return React.createElement(_reactNative.View,(0,_extends2.default)({style:subSeparatorStyles},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:7}}),children&&children);},[children,subSeparatorStyles]);};exports.SubItemSeparator=SubItemSeparator;var Items=function Items(_ref3){var flatListPropsFromComponent=_ref3.flatListProps,_ref3$styles=_ref3.styles,stylesFromProps=_ref3$styles===void 0?{}:_ref3$styles;var _useSMSContext3=(0,_useSMSContext4.default)(),components=_useSMSContext3.components,items=_useSMSContext3.items,selectedItems=_useSMSContext3.selectedItems,loading=_useSMSContext3.loading,_renderItemFlatList=_useSMSContext3._renderItemFlatList,flatListPropsFromContext=_useSMSContext3.itemsFlatListProps,itemId=_useSMSContext3.itemId,searchTerm=_useSMSContext3.searchTerm,_filterItems=_useSMSContext3._filterItems,styles=_useSMSContext3.styles,getStyles=_useSMSContext3.getStyles;var renderItems=searchTerm?_filterItems(searchTerm.trim()):items;var flatListProps=_objectSpread(_objectSpread({},flatListPropsFromContext),flatListPropsFromComponent);var itemWrapperStyles=React.useMemo(function(){return getStyles('itemWrapper',{},stylesFromProps);},[styles.itemWrapper,stylesFromProps.itemWrapper]);return React.createElement(_reactNative.View,{keyboardShouldPersistTaps:"always",style:itemWrapperStyles,__self:_this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:5}},(loading?React.createElement(components.Loading,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:11}}):!renderItems||!renderItems.length&&!searchTerm?React.createElement(components.NoItems,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:15}}):null,items&&renderItems&&renderItems.length?React.createElement(_reactNative.FlatList,(0,_extends2.default)({keyboardShouldPersistTaps:"always",removeClippedSubviews:true,initialNumToRender:15,data:renderItems,extraData:selectedItems,keyExtractor:function keyExtractor(item){return""+itemId(item);},ItemSeparatorComponent:components.ItemSeparator,ListFooterComponent:components.ItemsFooter,renderItem:_renderItemFlatList},flatListProps,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:17}})):searchTerm?React.createElement(components.NoResults,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:15}}):null));};var _default=Items;exports.default=_default;