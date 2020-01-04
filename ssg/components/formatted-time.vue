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

    data() {
      const { timezone } = this.$store.state.settings
      const value = moment(this.time).tz(timezone)
      return {
        formatted: value.format(formats[this.format]),
        iso: value.toISOString(),
      }
    },
  }
</script>
