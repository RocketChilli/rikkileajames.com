<script>
  export default {
    props: {
      separators: {
        type: String,
        required: true,
      },
      limit: {
        type: Number,
        required: false,
        default: 0,
      },
    },
    render(h) {
      const text = this.$slots.default[0].text.trim()
      const separator = Array.from(this.separators).find((char) => text.includes(char))

      const chunks = text.split(separator)
      const elements = []

      let remaining = this.limit || chunks.length - 1
      while (separator && remaining) {
        elements.push(h('span', `${chunks.shift()}${separator}`))
        remaining -= 1
      }

      elements.push(h('span', chunks.join(separator)))

      return h('span', { class: 'split-text' }, elements)
    },
  }
</script>
