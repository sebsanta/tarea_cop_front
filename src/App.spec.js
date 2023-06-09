import { render } from "@testing-library/react";
import App from "./App";

describe("fetch", ()=> {
    it("Se comprueba que los servicios traen datos", () => {
        const sut = render(<App/>);
        const titleElement = sut.getByText("Aplicación Tareas Cop");

        expect(titleElement).toBeInTheDocument();

    })
})