import { createRuntimeBindings } from "@leanjs/react";
import { createRuntime } from "@micro-observability/runtime-shared";

export { createRuntime };

export const {
  useGetter,
  useSetter,
  useLoading,
  useError,
  useRuntime,
  HostProvider,
} = createRuntimeBindings(createRuntime);
