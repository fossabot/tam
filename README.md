
# تم - tam
<!-- ![tam]() -->
 <div dir="rtl">
  <img src="/static/image/tam.png">
</div>


## ليه احتاجه؟
كل مره تبي تسوي مشروع جديد NuxtJs تعيد نفس الخطوات .. مثلا تنزيل المكتبات و ترتيب الملفات وانشائها وربطها, في هذا المشروع انشأت مشروع NuxtJs وسويت بعض الحاجات اللي ممكن تحتاجها (نزلت المكتبات,ربطت الملفات, واهم شي العناصر الجاهزة)  

### ⚒️ تحت التطوير

# 📦 العناصر - Components
هذي العناصر جاهزة للاستخدام بس اكتبها

### قواعد

---

العنوان ( ``title`` ) String

الحقل هذا تكتب فيه عنوان العنصر مثلا (الاسم , البلد..الخ) 

---
العناصر ( ``:items`` ) Array

تضيف في هذا الحقل مصفوفة فيها العناصر

---

اضافة قيمة مسبقة (``:value``)

يمكنك في هذا الحقل وضع قيمة في العنصر

*هذا الحقل غير اجباري

---

الوصف ( ``des`` ) String

الوصف او التعليق

*هذا الحقل غير اجباري

---



<br/>

## اختيار متعدد - Box Select Multiple
```
<box-list
title="title"
:value ="['html']"
:items="[{text: 'Html',val: 'html'},{text: 'css',val: 'css'}]"
@selectList="yourVariable = $event"
></box-list>
```

## اختيار واحد - Box Select One Item
```
<box-select
title="title"
:items="[{text: 'العربية',val: 'ar'},{text: 'الأنجليزية',val: 'en'}]"
value="en"
@selectElement="yourVariable = $event"></box-select>
```

## حقل نصي وعنوان - Box input
```
<box-input 
title="title" 
value="textSetInInput" 
@getText="yourVariable = $event"
></box-input>
```

## تفعيل/ايقاف - Box Boolean
```
<box-boolean
 title="title"
 des="description"
 :value="true"
 @selectBool="yourVariable = $event"
 ></box-boolean>
```

## مربع اختيار - Box Checkbox
```
<box-checkbox 
title="title" 
:value="true" 
@selectBool="yourVariable = $event"
></box-checkbox>
```

## نافذة منبثقه - pop-up
```
<pop class="className Size"></pop>
<!--
Size :  // Not Rquerd
.small
.large
.medium
-->
```

# 🎨 الكلاسات - Class :

```
.g-btn
.g-input
.g-label
```

# 🧰 اشياء تقدر تستخدمها - Methods :

```
+ ClosePop(eleClass)
+ openPop(eleClass)
```

