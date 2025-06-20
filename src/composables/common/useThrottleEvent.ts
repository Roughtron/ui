import { ref } from 'vue';

export default (delay = 100) => {
  const lastEventTime = ref(0);

  const handleThrottleEvent = (event: MouseEvent) => {
    const now = new Date().getTime();

    if (now - lastEventTime.value < delay) {
      event.stopPropagation();
    }

    lastEventTime.value = now;
  };

  return {
    handleThrottleEvent,
  };
};
