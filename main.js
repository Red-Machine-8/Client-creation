Vue.component('general_information',{
  template: `
  <div class="personal_data">
      <p>Фамилия* <input type="text" id="Surname" size="40" required></p>
      <p>Имя* <input type="text" v-model="message" id="Name" size="40" required></p>
      <p>Отчество <input type="text" id="Patronymic" size="40"></p>
      <p>Дата рождения* <input type="text" id="Date" size="40" required></p>
      <p>Номер телефона* <span class="input-group-addon"><span>+7</span></span>
         <input type="tel"
         v-model="phone"
         name="phone"
         id="phone"
         placeholder="(555) 555-5555"
         autocomplete="tel"
         maxlength="14"
         class="form-control"
         v-phone
         pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" required />
      <p>Группа клиентов* <select>
        <option v-for="detail in details">{{ detail }}</option>
      </select>
      </p>
      <p>Лечащий врач
      <select>
        <option v-for="doctor in doctors">{{ doctor }}</option>
      </select>
      </p>
      <p>Не отправлять СМС <input type="checkbox"></p>
   </div>
  `,
  data(){
    return{
      details: ['VIP','Проблемные','ОМС'],
      doctors: ['Иванов','Захаров','Чернышева']
    }
  }
}),

Vue.component('address_k',{
  template:
  ` <div class="address">
        <p>Индекс <input type="text" id="adres" size="40"> </p>
        <p>Страна <input type="text" id="country" size="40"> </p>
        <p>Область <input type="text" id="region" size="40"> </p>
        <p>Город* <input type="text" id="town" size="40" required> </p>
        <p>Улица <input type="text" id="street" size="40"> </p>
        <p>Дом <input type="text" id="house" size="40"> </p>
    </div>
  `
})

Vue.component('document_k',{
  template:`
    <div class="document">
    <p>Тип документа*
    <select>
      <option v-for="document in documents">{{ document }}</option>
    </select>
    </p>
    <p>Серия <input type="text" id="series" size="40"> </p>
    <p>Номер <input type="text" id="number" size="40"> </p>
    <p>Кем выдан <input type="text" id="issued_by" size="40"> </p>
    <p>Дата выдачи* <input type="text" id="date_d" size="40" required> </p>
    </div>
  `,
  data(){
    return{
      documents:['Паспорт','Свидетельство о рождении','Вод. удостоверение']
    }
  }
})

Vue.directive('phone', {
  bind(el) {
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return;
      }

      let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      el.dispatchEvent(new Event('input'));
    }
  }
});

var app = new Vue({
  el: '#app'
})
