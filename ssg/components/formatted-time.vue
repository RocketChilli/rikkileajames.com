<template>
  <time :datetime="iso">{{ formatted }}</time>
</template>

<script>
  import moment from 'moment-timezone'

  const formats = {
    date: 'D MMMM YYYY',
    time: 'h:mm A',
    datetime: 'D MMMM YYYY, h:mm A',
  }

  export default {
    props: {
      time: {
        type: [String, Date],
        required: false,
        default: new Date(),
      },
      format: {
        type: String,
        required: true,
      },
    },

    computed: {
      timezone() {
        return this.$store.state.settings.timezone
      },
      value() {
        return moment(this.time).tz(this.timezone)
      },
      formatted() {
        return this.value.format(formats[this.format])
      },
      iso() {
        return this.value.toISOString()
      },
    },
  }
</script>
