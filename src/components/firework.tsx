import { type CreateTypes, create } from "canvas-confetti";
import React, { useEffect, useRef } from "react";
import { DataContext } from "../helpers/dataContext";

export default function Firework() {
	const { data } = React.useContext(DataContext);
	const passesAllTests = data.passesAllTests;
	const componentRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const fireRef = useRef<CreateTypes | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			fireRef.current = create(canvasRef.current, {});
		}
	}, []);

	useEffect(() => {
		if (!passesAllTests) return;
		const divElement = componentRef.current as HTMLDivElement;
		divElement.classList.remove("hidden");
		fire();
		setTimeout(() => {
			divElement.classList.add("hidden");
		}, 4000);
	}, [passesAllTests]);

	const fire = () => {
		if (fireRef.current) {
			fireRef.current({
				particleCount: 200,
				// colors: ["#B22222", "#E25822", "#F1BC31", "#F6F052"],
				shapes: ["square"],
				startVelocity: 40,
				spread: 100,
				decay: 0.94,
				origin: {
					y: 1,
					x: 0.5,
				},
			});
		}
	};

	return (
		<div className="absolute left-[50%] top-0 z-[999] hidden translate-x-[-50%]" ref={componentRef}>
			<canvas ref={canvasRef} width="800" height="800" />
		</div>
	);
}
