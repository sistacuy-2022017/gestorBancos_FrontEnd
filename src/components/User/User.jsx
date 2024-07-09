export const User = () => {
    return (
        <div className="flex h-screen w-full items-center justify-end bg-slate-200 p-14">
            <div className="w-90 rounded-xl bg-white shadow-lg mt-[-7rem]">
                <div className="flex justify-center p-10">
                    <img src="https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-accountavataruser-blue-dotted-line-line-icon-png-image_1491314.jpg" alt="" className="w-32 h-32 rounded-full object-cover" />
                </div>

                <div className="flex flex-col items-center gap-4 p-8">
                    <h3 className="text-xl font-bold text-slate-800">Ejemplo 1</h3>
                    <p className="text-center text-sm text-slate-600">Número de cuenta: 123456789</p>

                    <div className="flex w-full items-center gap-3 rounded-lg bg-slate-50 p-3">
                        <div className="rounded-full bg-slate-200 p-2">
                           <img src="https://images.vexels.com/media/users/3/145753/isolated/lists/cc87af32e3beef17b5e349cec667bda5-bolsa-de-dinero-de-captura.png" className="h-5 w-5" alt="" />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-slate-800">Saldo Actual:</h4>
                            <span className="text-xs text-slate-600">$59.99/year</span>
                        </div>

                        <button className="ml-auto text-xs font-semibold text-blue-800 underline underline-offset-1 hover:text-blue-700 hover:no-underline focus:text-blue-700 focus:no-underline">Historial</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
