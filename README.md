# Basic authentication API server using express + MongoDB (Mongoose)
โปรแกรมนี้เป็นเนื้อหาส่วนหนึ่งในคอร์ส "Programming for the Noobs"
This repository is a courseware in class "Programming for the Noobs"

## ความต้องการขั้นพื้นฐาน
1. Node.js v6.11.1 LTS หรือใหม่กว่า
2. MongoDB v3.4.4 หรือใหม่กว่า
3. Git v2.12.2 หรือใหม่กว่า

## การใช้งานเบื้องต้น
1. เปิด MongoDB server ด้วยคำสั่งดังต่อไปนี้
เปิดหน้าต่าง command line ขึ้นมาแล้วพิมพ์คำสั่ง
```
mongod
```
2. ดาวน์โหลด source code
โดยทำการเปิด command line ขึ้นมาอีกอันแล้วไปยังโฟลเดอร์ที่ต้องการ จากนั้นทำการพิมพ์คำสั่งดังต่อไปนี้
```
git clone git@github.com:iamcmnut/basic-auth-api-express-mongodb.git
```
3. ทำการติดตั้ง library ที่จำเป็นด้วยคำสั่งดังต่อไปนี้
```
cd basic-auth-api-express-mongodb
```
```
npm install
```
4. เปิด API server ของเรา
```
npm start
```
5. ทดสอบการใช้งานโดยการเข้า http://localhost:7001/api/ ผ่านเบราเซอร์ หากสามารถทำงานได้อย่างถูกต้องจะพบข้อความว่า
```
It works!
```
