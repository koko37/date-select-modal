<template>
  <modal
    :showHeader="false"
    @close="handleClose"
    v-show="true"
    >
      <div class="flex flex-col">
        <div class="flex border-b border-gray-200">
          <div class="border-r border-gray-200 pr-6 date-picker">
            <ul>
              <li
                v-for="(date, index) in dates"
                :key="index"
                :class="selected.date.toDateString()===date.val.toDateString() && highlightDate ? 'active' : ''"
                @click="handleSelectDate(index)"
                >
                {{date.title}}
              </li>
            </ul>
          </div>
          <div class="pl-6">
            <v-date-picker
              :color="highlightDate ? 'blue' : ''"
              :value="selected.date"
              :from-date="selected.date"
              :available-dates="[{start: previousDate}]"
              @input="handleDatePick"
              @dayclick="handleDateClick"
              />
          </div>
        </div>
        <div class="flex justify-end pt-3">
          <select
            class="border border-gray-300 hover:border-gray-500 focus:border-gray-500 text-gray-800 text-xs px-1 py-1 rounded mr-1"
            @change="handleSelectHour"
            >
            <option v-for="hour in hours" :key="hour" :value="hour">
              {{`${hour} : 00`}}
            </option>
          </select>
          <select
            class="border border-gray-300 hover:border-gray-500 focus:border-gray-500 text-gray-800 text-xs px-1 py-1 rounded mr-3"
            @change="handleSelectAmPm"
            >
            <option>AM</option>
            <option>PM</option>
          </select>
          <button 
            class="bg-transparent hover:bg-gray-200 border border-gray-300 text-gray-800 text-xs py-1 px-2 rounded mr-2"
            @click="handleResetDate"
            >
              Reset Date
          </button>
          <button
            class="text-white text-xs py-1 px-2 rounded"
            :class="highlightDate ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-300'"
            :disabled="!highlightDate"
            @click="handleUpdate"
            >
              Update
          </button>
        </div>
      </div>
  </modal>
</template>

<script>
import Modal from './Modal';
import { today, tomorrow, nextWeek, nextMonth, nextYear } from '../dateutils';

export default {
  name: 'DateTimePicker',
  components: {
    'modal': Modal
  },
  data() {
    return {
      hours: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      dates: [
        { title: 'Today', val: today() },
        { title: 'Tomorrow', val: tomorrow() },
        { title: 'Next Week', val: nextWeek() },
        { title: 'Next Month', val: nextMonth() },
        { title: 'Next Year', val: nextYear() },
      ],
      highlightDate: true,
      dateChanged: false,
      selected: {
        hour: 12,
        ampm: 'AM',
        date: new Date()
      }
    }
  },
  methods: {
    handleSelectDate(id) {
      this.selected.date = this.dates[id].val;
      this.highlightDate = true;
    },
    handleSelectHour(e) {
      this.selected.hour = e.target.value;
    },
    handleSelectAmPm(e) {
      this.selected.ampm = e.target.value;
    },
    handleDatePick(date) {
      // if clicked the same date, then this method will not be invoked.
      this.selected.date = date;
      this.dateChanged = true;
    },
    handleDateClick() {
      // if clicked the same date, then only this method will be invoked.
      this.highlightDate = this.dateChanged;
      this.dateChanged = !this.dateChanged;
    },
    handleResetDate() {
      this.selected.date = new Date();
    },
    handleUpdate() {
      this.$emit('update', this.selected);
    },
    handleClose() {
      this.$emit('close');
    }
  },
  computed: {
    previousDate() {
      const d = new Date();
      d.setDate(d.getDate()-1);
      return d;
    }
  }
}
</script>

<style lang="scss">
.v-modal{
  .date-picker {
    li {
      @apply text-gray-400 py-2 text-sm cursor-pointer rounded px-2;
      &.active{
        @apply text-blue-700 bg-gray-200;
      }
    }
  }

  .vc-container {
    border: none;

    .vc-header {
      @apply border-b;
      padding: .5rem;
    }
  }
  
}
</style>
