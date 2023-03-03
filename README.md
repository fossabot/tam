# tam
![tam](/static/image/tam.png)
## Why do I need it
When you want to start any new project, you need to do some basic things such as arranging files and downloading the libraries that you need to work. This template also provides some codes that help you, such as you do not need to create a pop to write codes. All you have to do is use < pop >< /pop > Putting content...

### ⚒️ Under development

# 📦 Components
Ready to use

### Basics

---

``title``

Title This Element

---
``:items``

The items are an array

---

``:value``
// Not Required

They are values that you want to be selected from the code

---

``des``
// Not Required

Description or comment

---


## Box Select Multiple
```
<box-list
title="title"
:value ="['html']"
:items="[{text: 'Html',val: 'html'},{text: 'css',val: 'css'}]"
@selectList="yourVariable = $event"
></box-list>
```

## Box Select One Item
```
<box-select
title="title"
:items="[{text: 'العربية',val: 'ar'},{text: 'الأنجليزية',val: 'en'}]"
value="en"
@selectElement="yourVariable = $event"></box-select>
```

## Box input
```
<box-input 
title="title" 
value="textSetInInput" 
@getText="yourVariable = $event"
></box-input>
```

## Box Boolean
```
<box-boolean
 title="title"
 des="description"
 :value="true"
 @selectBool="yourVariable = $event"
 ></box-boolean>
```

## Box Checkbox
```
<box-checkbox 
title="title" 
:value="true" 
@selectBool="yourVariable = $event"
></box-checkbox>
```

## pop-up
```
<pop class="className Size"></pop>
<!--
Size :  // Not Rquerd
.small
.large
.medium
-->
```


