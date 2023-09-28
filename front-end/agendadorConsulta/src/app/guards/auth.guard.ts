import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { tap } from 'rxjs';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const service = inject(AutenticacaoService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  return service.usuarioLogado().pipe(
    tap((estaLogado) => {
      if (estaLogado) {
        return true;
      } else {
        snackBar.open('Por gentileza, realize o login', 'Fechar', {
          duration: 5000,
        });
        router.navigate(['/home']);
        return false;
      }
    })
  );
};
