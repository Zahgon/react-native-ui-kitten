export interface WebEventResponderCallbacks {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class WebEventResponderInstance {
  readonly eventHandlers: WebEventResponderCallbacks;

  constructor(props: WebEventResponderCallbacks) {
    this.eventHandlers = props;
  }
}

class WebEventResponderStatic {
  static create(config: WebEventResponderCallbacks): WebEventResponderInstance {
    return new WebEventResponderInstance({
      onMouseEnter: () => {
            throw new Error("STUB");
        },
      onMouseLeave: () => {
          throw new Error("STUB");
      },
      onFocus: () => {
          throw new Error("STUB");
      },
      onBlur: () => {
          throw new Error("STUB");
      },
    });
  }
}

export const WebEventResponder = WebEventResponderStatic;
